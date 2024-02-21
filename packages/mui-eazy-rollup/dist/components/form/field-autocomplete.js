import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import Autocomplete from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Autocomplete/Autocomplete.js';
import TextField from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TextField/TextField.js';

function FieldAutocomplete({
  name,
  label,
  placeholder,
  helperText,
  ...other
}) {
  const {
    control,
    setValue
  } = useFormContext();
  return jsxRuntimeExports.jsx(Controller, {
    name: name,
    control: control,
    render: ({
      field,
      fieldState: {
        error
      }
    }) => jsxRuntimeExports.jsx(Autocomplete, {
      ...field,
      onChange: (_, newValue) => setValue(name, newValue, {
        shouldValidate: true
      }),
      renderInput: params => jsxRuntimeExports.jsx(TextField, {
        label: label,
        placeholder: placeholder,
        error: !!error,
        helperText: error ? error?.message : helperText,
        ...params
      }),
      ...other
    })
  });
}

export { FieldAutocomplete as default };
