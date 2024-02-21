import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import { MuiOtpInput as oe } from '../../node_modules/.pnpm/mui-one-time-password-input@2.0.2_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_materia_zfj6k7f6yfwygnu6ebtjrsucvm/node_modules/mui-one-time-password-input/dist/mui-one-time-password-input.es.js';
import FormHelperText from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js';

function FieldCode({
  name,
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
    }) => jsxRuntimeExports.jsxs("div", {
      children: [jsxRuntimeExports.jsx(oe, {
        ...field,
        autoFocus: true,
        gap: 1.5,
        length: 6,
        TextFieldsProps: {
          error: !!error,
          placeholder: '-'
        },
        ...other
      }), error && jsxRuntimeExports.jsx(FormHelperText, {
        sx: {
          px: 2
        },
        error: true,
        children: error.message
      })]
    })
  });
}

export { FieldCode as default };
