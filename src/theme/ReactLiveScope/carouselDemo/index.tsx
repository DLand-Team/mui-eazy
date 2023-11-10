import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Carousel, CarouselArrows, Image, useCarousel } from "../components";

//code----------------------------------------------------------------------
const imgeList = [
  "https://qiniu.moderate.run/img/20220831081227.png",
  "https://qiniu.moderate.run/img/QQ20230420-204615%402x.png",
  "https://qiniu.moderate.run/img/QQ20230420-205004%402x.png",
  "https://qiniu.moderate.run/img/20220831081227.png",
  "https://qiniu.moderate.run/img/QQ20230420-204615%402x.png",
  "https://qiniu.moderate.run/img/QQ20230420-205004%402x.png",
  "https://qiniu.moderate.run/img/20220831081227.png",
  "https://qiniu.moderate.run/img/QQ20230420-204615%402x.png",
  "https://qiniu.moderate.run/img/QQ20230420-205004%402x.png",
];

function CarouselDemo(props: { ref?; carouselOptions? }) {
  const slides = imgeList.map((slide) => ({
    src: slide,
  }));

  let carouselBase = useCarousel(
    slides.length > 5
      ? {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      : {
          centerMode: true,
          slidesToShow: slides.length,
        }
  );
  if (props.carouselOptions) {
    carouselBase = props.carouselOptions;
  }
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h4">Gallery</Typography>
        <CarouselArrows
          spacing={2}
          onNext={carouselBase.onNext}
          onPrev={carouselBase.onPrev}
        />
      </Stack>

      <Carousel
        ref={props.ref || carouselBase.carouselRef}
        {...carouselBase.carouselSettings}>
        {slides.map((slide) => (
          <Box key={slide.src} sx={{ px: 1 }}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
              }}>
              <Image
                sx={{
                  height: "165px",
                }}
                alt={slide.src}
                src={slide.src}
                ratio="16/9"
              />
            </Box>
          </Box>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselDemo;
