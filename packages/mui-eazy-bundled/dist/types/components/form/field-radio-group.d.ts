/// <reference types="react" />
import { RadioGroupProps } from '@mui/material/RadioGroup';
export type FieldRadioGroupProps = RadioGroupProps & {
    name: string;
    options: {
        label: string;
        value: any;
        key: string;
        info?: string;
    }[];
    label?: string;
    spacing?: number;
    helperText?: React.ReactNode;
    disabled?: boolean;
};
export default function FieldRadioGroup({ row, name, label, options, spacing, helperText, disabled, ...other }: FieldRadioGroupProps): import("react/jsx-runtime").JSX.Element;
