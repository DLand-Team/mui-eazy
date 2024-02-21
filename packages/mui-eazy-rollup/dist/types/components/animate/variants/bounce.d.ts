import { VariantsType } from '../types';
export declare const varBounce: (props?: VariantsType) => {
    in: {
        initial: {};
        animate: {
            scale: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
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
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
            };
        };
        exit: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
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
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
            };
        };
        exit: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
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
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
            };
        };
        exit: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
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
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
            };
        };
        exit: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | number[];
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
