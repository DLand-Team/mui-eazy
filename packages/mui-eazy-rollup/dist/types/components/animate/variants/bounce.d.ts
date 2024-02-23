import { VariantsType } from '../types';
export declare const varBounce: (props?: VariantsType) => {
    in: {
        initial: {};
        animate: {
            scale: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            scale: number[];
            opacity: number[];
        };
    };
    inUp: {
        initial: {};
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inDown: {
        initial: {};
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inLeft: {
        initial: {};
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inRight: {
        initial: {};
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    out: {
        animate: {
            scale: number[];
            opacity: number[];
        };
    };
    outUp: {
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
        };
    };
    outDown: {
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
        };
    };
    outLeft: {
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
        };
    };
    outRight: {
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
        };
    };
};
