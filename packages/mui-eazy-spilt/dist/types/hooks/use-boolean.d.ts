/// <reference types="react" />
export interface UseBooleanReturnType {
    value: boolean;
    onTrue: () => void;
    onFalse: () => void;
    onToggle: () => void;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare function useBoolean(defaultValue?: boolean): UseBooleanReturnType;
