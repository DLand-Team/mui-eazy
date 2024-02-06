import image1 from "@/assets/image/test-image-1.jpg";
import image2 from "@/assets/image/test-image-2.jpg";
import image3 from "@/assets/image/test-image-3.webp";
import image4 from "@/assets/image/test-image-4.webp";
import LandCard from "@/common/components/Card";
import { Container } from "@mui/material";
import styles from "./index.module.scss";
import LoginModalComponent from "@/common/components/LoginModal";

export default function View() {
	return (
		<div className={styles.container}>
			<div className={styles.banner}>
				<video
					src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
					aria-hidden="true"
					data-recon-click="covers,onVideoBtnClick,covers,covers"
					data-recon-globalfocus="covers,playOnBrowserActive,covers,covers"
					data-recon-globalblur="covers,onBrowserBlur,covers,covers"
					preload="metadata"
					muted
					loop
					autoPlay
					playsInline
				></video>
				<div className={styles.cover}>
					<div className={styles.topText}>
						Next - Mui - Redux - Ts
					</div>
					<div className={styles.bottomText}>
						闲D岛出品：《Moderate中用》系列
					</div>
				</div>
			</div>
			<Container className={styles.cards}>
				<LandCard
					className={styles.each}
					image={image1.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image2.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image3.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image4.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image1.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image2.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image3.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image4.src}
					title={"Mobile Phone Plans Special "}
				></LandCard>
			</Container>
			<LoginModalComponent></LoginModalComponent>
		</div>
	);
}
