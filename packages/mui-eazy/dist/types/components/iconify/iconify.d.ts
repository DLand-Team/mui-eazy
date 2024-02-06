/// <reference types="react" />
import { BoxProps } from '@mui/material/Box';
import { IconifyProps } from './types';
export interface MyIconifyProps extends BoxProps {
    icon: IconifyProps;
}
export declare const Iconify: import("react").ForwardRefExoticComponent<Omit<MyIconifyProps, "ref"> & import("react").RefAttributes<SVGElement>>;
