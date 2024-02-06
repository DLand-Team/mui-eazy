import { Breakpoint } from '@mui/material/styles';
type ReturnType = boolean;
export type Query = 'up' | 'down' | 'between' | 'only';
export type Value = Breakpoint | number;
export declare function useResponsive(query: Query, start?: Value, end?: Value): ReturnType;
export declare function useWidth(): "xs" | "sm" | "md" | "lg" | "xl";
export {};
