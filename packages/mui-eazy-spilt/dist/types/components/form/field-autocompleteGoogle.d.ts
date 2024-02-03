/// <reference types="react" />
import { AutocompleteProps } from '@mui/material/Autocomplete';
export interface FieldAutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
    name: string;
    label?: string;
    placeholder?: string;
    helperText?: React.ReactNode;
}
export default function FieldAutocompleteGoogle<_, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>({ name, label, placeholder, helperText, ...other }: Omit<FieldAutocompleteProps<string, Multiple, DisableClearable, FreeSolo>, 'renderInput' | 'options'>): import("react/jsx-runtime").JSX.Element;
