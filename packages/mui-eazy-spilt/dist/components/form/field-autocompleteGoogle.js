import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { createElement } from 'react';
import _default from '../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import Autocomplete from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Autocomplete/Autocomplete.js';
import TextField from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TextField/TextField.js';

function FieldAutocompleteGoogle({
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
  const {
    placePredictions,
    getPlacePredictions
  } = _default({
    apiKey: 'AIzaSyC2UQBWd-kkALximl2gxxBxuVTJ9rE2b7w'
  });
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
      renderOption: (props, option) => {
        return /*#__PURE__*/createElement("li", {
          ...props,
          key: option
        }, option);
      },
      onChange: (_, newValue) => {
        setValue(name, newValue, {
          shouldValidate: true
        });
      },
      onInputChange: (_, newValue) => {
        getPlacePredictions({
          input: newValue
        });
      },
      renderInput: params => jsxRuntimeExports.jsx(TextField, {
        label: label,
        placeholder: placeholder,
        error: !!error,
        helperText: error ? error?.message : helperText,
        ...params
      }),
      options: placePredictions.map(item => {
        return item.description;
      }),
      ...other
    })
  });
}

export { FieldAutocompleteGoogle as default };
