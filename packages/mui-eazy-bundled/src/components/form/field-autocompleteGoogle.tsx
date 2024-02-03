import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { Controller, useFormContext } from 'react-hook-form';
// ----------------------------------------------------------------------

export interface FieldAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
}

export default function FieldAutocompleteGoogle<
  _,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  name,
  label,
  placeholder,
  helperText,
  ...other
}: Omit<
  FieldAutocompleteProps<string, Multiple, DisableClearable, FreeSolo>,
  'renderInput' | 'options'
>) {
  const { control, setValue } = useFormContext();

  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: 'AIzaSyC2UQBWd-kkALximl2gxxBxuVTJ9rE2b7w',
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            );
          }}
          onChange={(_, newValue) => {
            setValue(name, newValue, { shouldValidate: true });
          }}
          onInputChange={(_, newValue) => {
            getPlacePredictions({ input: newValue });
          }}
          renderInput={(params) => (
            <TextField
              label={label}
              placeholder={placeholder}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...params}
            />
          )}
          options={placePredictions.map((item) => {
            return item.description;
          })}
          {...other}
        />
      )}
    />
  );
}
