/// <reference types="react" />
type Props = {
    timeout?: number;
    click?: (e: React.SyntheticEvent) => void;
    doubleClick: (e: React.SyntheticEvent) => void;
};
export declare function useDoubleClick({ click, doubleClick, timeout }: Props): (event: React.MouseEvent<HTMLElement>) => void;
export {};
