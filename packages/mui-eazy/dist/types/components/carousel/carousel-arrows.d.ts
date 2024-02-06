/// <reference types="react" />
import { StackProps } from '@mui/material/Stack';
import { IconButtonProps } from '@mui/material/IconButton';
import { IconifyProps } from '../iconify';
interface Props extends StackProps {
    shape?: 'circular' | 'rounded';
    filled?: boolean;
    children?: React.ReactNode;
    icon?: IconifyProps;
    onNext?: VoidFunction;
    onPrev?: VoidFunction;
    leftButtonProps?: IconButtonProps;
    rightButtonProps?: IconButtonProps;
}
export default function CarouselArrows({ shape, filled, icon, onNext, onPrev, children, leftButtonProps, rightButtonProps, sx, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
