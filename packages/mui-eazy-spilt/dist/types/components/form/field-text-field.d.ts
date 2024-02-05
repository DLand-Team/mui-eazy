import { TextFieldProps } from "@mui/material/TextField";
export type FieldTextProps = TextFieldProps & {
    name: string;
};
export default function FieldText({ name, helperText, type, defaultValue, ...other }: FieldTextProps): import("react/jsx-runtime").JSX.Element;
