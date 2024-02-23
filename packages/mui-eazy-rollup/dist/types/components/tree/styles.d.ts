/// <reference types="react" />
import { MyIconifyProps } from '../iconify';
export type TreeItemConfigProps = {
    hiddenLabel?: boolean;
    itemGap?: number;
    iconSize?: number;
    itemRadius?: number;
    itemPadding?: string;
    currentRole?: string;
    itemSubHeight?: number;
    itemRootHeight?: number;
};
export declare const TreeItemStyledItem: import("@emotion/styled").StyledComponent<import("@mui/material").ListItemButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "className" | "style" | "classes" | "alignItems" | "children" | "sx" | "autoFocus" | "tabIndex" | "disabled" | "action" | "selected" | "dense" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "divider" | "disableGutters"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    active: boolean;
    depth: number;
    config: TreeItemConfigProps;
}, {}, {}>;
type TreeItemStyledIconProps = {
    size?: number;
};
export declare const TreeItemStyledIcon: import("@emotion/styled").StyledComponent<import("@mui/material").ListItemIconProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & TreeItemStyledIconProps, {}, {}>;
export type TreeItemDotIconProps = {
    active?: boolean;
};
export declare const TreeItemStyledDotIcon: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & TreeItemDotIconProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const StyledIconify: import("@emotion/styled").StyledComponent<Omit<MyIconifyProps, "ref"> & import("react").RefAttributes<SVGElement> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & MyIconifyProps, {}, {}>;
export {};
