import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import '../../utils/highlight.js';
import { fCurrencyWithout } from '../../utils/format-number.js';
import '../../utils/myDay.js';
import '@mui/material';
import 'react';
import '../../hooks/use-fields.js';
import '../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import '../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../upload/upload-drag/cropModal.js';
import '../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../editor/styles.js';
import '../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';
import TextField from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TextField/TextField.js';

function FieldText({
  name,
  helperText,
  type,
  defaultValue,
  ...other
}) {
  const {
    control
  } = useFormContext();
  return jsxRuntimeExports.jsx(Controller, {
    name: name,
    control: control,
    render: ({
      field,
      fieldState: {
        error
      }
    }) => {
      if (field.value && type === 'money') {
        let newVal = fCurrencyWithout(Number(String(field.value).replace(/\,/g, '')));
        if (newVal !== 'NaN') {
          field.value = newVal;
        } else {
          field.value = 0;
        }
      }
      return jsxRuntimeExports.jsx(TextField, {
        ...field,
        onSubmit: e => {
          e.preventDefault();
        },
        InputLabelProps: {
          shrink: true
        },
        fullWidth: true,
        value: field.value || '',
        onChange: event => {
          if (type === 'number') {
            field.onChange(Number(event.target.value.replace(/\,/g, '')));
          } else {
            field.onChange(event.target.value);
          }
        },
        error: !!error,
        helperText: error ? error?.message : helperText,
        ...other
      });
    }
  });
}

export { FieldText as default };
