export type Props = {
    staggerIn?: number;
    delayIn?: number;
    staggerOut?: number;
};
export declare const varContainer: (props?: Props) => {
    animate: {
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
    exit: {
        transition: {
            staggerChildren: number;
            staggerDirection: number;
        };
    };
};
