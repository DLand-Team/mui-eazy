import { OptionsObject } from "notistack";
export * from "./provider";
export declare const notify: {
    info: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"error" | "default" | "info" | "warning" | "success"> | undefined) => void;
    error: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"error" | "default" | "info" | "warning" | "success"> | undefined) => void;
    success: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"error" | "default" | "info" | "warning" | "success"> | undefined) => void;
    warn: (message: import("notistack").SnackbarMessage, options?: OptionsObject<"error" | "default" | "info" | "warning" | "success"> | undefined) => void;
};
