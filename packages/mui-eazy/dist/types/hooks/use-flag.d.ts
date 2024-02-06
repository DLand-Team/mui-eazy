/// <reference types="react" />
interface ReturnType {
    value: boolean;
    onTrue: () => void;
    onFalse: () => void;
    onToggle: () => void;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare function useFlag(defaultValue?: boolean): ReturnType;
export {};
