import { UploadProps } from '../upload';
export interface FieldUploadProps extends Omit<UploadProps, 'file'> {
    name: string;
    multiple?: boolean;
    isCrop?: boolean;
}
export declare function FieldUploadBox({ name, ...other }: FieldUploadProps): import("react/jsx-runtime").JSX.Element;
export declare function FieldUpload({ accept, name, multiple, helperText, onUpload, isCrop, ...other }: FieldUploadProps): import("react/jsx-runtime").JSX.Element;
