import { useRef, useState, useCallback } from 'react';
import useTheme from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js';

function useCarousel(props) {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(props?.initialSlide || 0);
  const [nav, setNav] = useState(undefined);
  const rtl = theme.direction === 'rtl';
  const carouselSettings = {
    arrows: false,
    dots: !!props?.customPaging,
    rtl,
    beforeChange: (_, next) => setCurrentIndex(next),
    ...props,
    fade: !!(props?.fade && !rtl)
  };
  const onSetNav = useCallback(() => {
    if (carouselRef.current) {
      setNav(carouselRef.current);
    }
  }, []);
  const onPrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  }, []);
  const onNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  }, []);
  const onTogo = useCallback(index => {
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(index);
    }
  }, []);
  return {
    nav,
    carouselRef,
    currentIndex,
    carouselSettings,
    //
    onPrev,
    onNext,
    onTogo,
    onSetNav,
    //
    setNav,
    setCurrentIndex
  };
}

export { useCarousel as default };
