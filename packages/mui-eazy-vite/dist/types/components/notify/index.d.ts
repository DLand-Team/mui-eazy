import { OptionsObject } from 'notistack';
export * from './provider';
export declare const notify: {
    info: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"default" | "error" | "success" | "info" | "warning"> | undefined) => void;
    error: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"default" | "error" | "success" | "info" | "warning"> | undefined) => void;
    success: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"default" | "error" | "success" | "info" | "warning"> | undefined) => void;
    warn: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"default" | "error" | "success" | "info" | "warning"> | undefined) => void;
};
