import { MotionProps } from 'framer-motion';
import { BoxProps } from '@mui/material/Box';
type IProps = BoxProps & MotionProps;
export interface MotionContainerProps extends IProps {
    animate?: boolean;
    action?: boolean;
}
export declare function MotionContainer({ animate, action, children, ...other }: MotionContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
