import { SxProps, Theme } from '@mui/material';
type FileIconProps = {
    file: File;
    fileName: string;
    sx?: SxProps<Theme>;
};
export declare function FileThumbnail({ fileName, file, sx }: FileIconProps): import("react/jsx-runtime").JSX.Element;
export {};
