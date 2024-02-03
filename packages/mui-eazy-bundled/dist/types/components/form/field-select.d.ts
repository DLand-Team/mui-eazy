/// <reference types="react" />
import { Theme, SxProps } from '@mui/material/styles';
import { SelectProps } from '@mui/material/Select';
import { TextFieldProps } from '@mui/material/TextField';
export type FieldSelectProps = TextFieldProps & {
    name: string;
    native?: boolean;
    maxHeight?: boolean | number;
    children: React.ReactNode;
    PaperPropsSx?: SxProps<Theme>;
    test?: string;
};
export declare function FieldSelect({ name, native, maxHeight, helperText, children, PaperPropsSx, ...other }: FieldSelectProps): import("react/jsx-runtime").JSX.Element;
export type FieldMultiSelectProps = SelectProps<string[]> & {
    name: string;
    label?: string;
    chip?: boolean;
    checkbox?: boolean;
    placeholder?: string;
    helperText?: React.ReactNode;
    options: {
        label: string;
        value: string;
    }[];
};
export declare function FieldMultiSelect({ name, chip, label, options, checkbox, placeholder, helperText, sx, ...other }: FieldMultiSelectProps): import("react/jsx-runtime").JSX.Element;
