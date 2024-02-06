/// <reference types="react" />
import { StackProps } from '@mui/material/Stack';
type EmptyContentProps = StackProps & {
    title?: string;
    imgUrl: string;
    filled?: boolean;
    description?: string;
    action?: React.ReactNode;
};
export declare function Empty({ title, imgUrl, action, filled, description, sx, ...other }: EmptyContentProps): import("react/jsx-runtime").JSX.Element;
export {};
