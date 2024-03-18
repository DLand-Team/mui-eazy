/// <reference types="react" />
import { Theme } from '@mui/material/styles';
import { LabelColor, LabelVariant } from './types';
export declare const StyledLabel: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    theme: Theme;
    ownerState: {
        color: LabelColor;
        variant: LabelVariant;
    };
}, {}, {}>;
