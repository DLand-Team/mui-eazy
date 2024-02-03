export declare function useLocalStorage(key: string, initialState: any): {
    state: any;
    update: (name: string, updateValue: any) => void;
    reset: () => void;
};
export declare const getStorage: (key: string) => null;
export declare const setStorage: (key: string, value: any) => void;
export declare const removeStorage: (key: string) => void;
