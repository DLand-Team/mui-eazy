/// <reference types="react" />
import { AutocompleteProps } from '@mui/material/Autocomplete';
interface Props<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
    name: string;
    label?: string;
    placeholder?: string;
    helperText?: React.ReactNode;
}
export default function FieldAutocomplete<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined>({ name, label, placeholder, helperText, ...other }: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'>): import("react/jsx-runtime").JSX.Element;
export {};
