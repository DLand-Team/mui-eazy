/// <reference types="react" />
import Carousel, { Settings } from "react-slick";
type ReturnType = {
    currentIndex: number;
    nav: Carousel | undefined;
    carouselSettings: Settings;
    carouselRef: React.MutableRefObject<Carousel | null>;
    onPrev: VoidFunction;
    onNext: VoidFunction;
    onSetNav: VoidFunction;
    onTogo: (index: number) => void;
    setNav: React.Dispatch<React.SetStateAction<Carousel | undefined>>;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};
export default function useCarousel(props?: Settings): ReturnType;
export {};
