type InputValue = Date | string | number | null | undefined;
export declare function fDate(date: InputValue, newFormat?: string): string;
export declare function fDateTime(date: InputValue, newFormat?: string): string;
export declare function fTimestamp(date: InputValue): number | "";
export declare function fToNow(date: InputValue): string;
export {};
