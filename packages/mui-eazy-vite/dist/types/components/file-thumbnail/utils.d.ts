import { ExtendFile } from './types';
export declare function fileFormat(fileUrl: string | undefined): any;
export declare function fileThumb(fileUrl: string): any;
export declare function fileTypeByUrl(fileUrl?: string): string;
export declare function fileNameByUrl(fileUrl: string): string | undefined;
export declare function fileData(file: ExtendFile | string): {
    key: string;
    preview: string;
    name: string | undefined;
    type: string;
    size?: undefined;
    path?: undefined;
    lastModified?: undefined;
    lastModifiedDate?: undefined;
} | {
    key: string | undefined;
    name: string;
    size: number;
    path: string | undefined;
    type: string;
    preview: string | undefined;
    lastModified: number;
    lastModifiedDate: string | undefined;
};
