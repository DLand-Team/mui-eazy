/// <reference types="react" />
import { FormControlLabelProps } from '@mui/material/FormControlLabel';
interface Props extends Omit<FormControlLabelProps, 'control'> {
    name: string;
    helperText?: React.ReactNode;
}
export default function FieldSwitch({ name, helperText, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
