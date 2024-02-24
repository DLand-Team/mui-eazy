/// <reference types="react" />
type ReturnType = boolean;
interface UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
    container?: React.RefObject<HTMLElement>;
    target?: React.RefObject<HTMLElement>;
}
export declare function useOffSetTop(top?: number, options?: UseScrollOptions): ReturnType;
export {};
