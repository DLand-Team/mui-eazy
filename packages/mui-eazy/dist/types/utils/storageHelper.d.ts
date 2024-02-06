type ItemKey = 'ACCESS_TOKEN';
export declare const storageHelper: {
    setItem: (key: ItemKey, data: unknown, type?: 'session' | 'local') => void;
    clear: (type?: 'session' | 'local') => void;
    removeItem: (key: ItemKey, type?: 'session' | 'local') => void;
    getItem: (key: ItemKey, type?: 'session' | 'local') => string;
};
export {};
