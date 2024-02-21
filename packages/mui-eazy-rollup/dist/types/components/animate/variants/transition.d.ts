import { TranHoverType, TranEnterType, TranExitType } from '../types';
export declare const varTranHover: (props?: TranHoverType) => {
    duration: number;
    ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
};
export declare const varTranEnter: (props?: TranEnterType) => {
    duration: number;
    ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
};
export declare const varTranExit: (props?: TranExitType) => {
    duration: number;
    ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
};
