/// <reference types="react" />
import { FormControlLabelProps } from '@mui/material/FormControlLabel';
export interface FieldCheckboxProps extends Omit<FormControlLabelProps, 'control'> {
    name: string;
    helperText?: React.ReactNode;
}
export declare function FieldCheckbox({ name, helperText, ...other }: FieldCheckboxProps): import("react/jsx-runtime").JSX.Element;
interface FieldMultiCheckboxProps extends Omit<FormControlLabelProps, 'control' | 'label'> {
    name: string;
    options: {
        label: string;
        value: any;
    }[];
    row?: boolean;
    label?: string;
    spacing?: number;
    helperText?: React.ReactNode;
}
export declare function FieldMultiCheckbox({ row, name, label, options, spacing, helperText, sx, ...other }: FieldMultiCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
