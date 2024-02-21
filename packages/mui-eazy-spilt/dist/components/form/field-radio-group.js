import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import FormControl from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/FormControl.js';
import FormLabel from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormLabel/FormLabel.js';
import RadioGroup from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/RadioGroup/RadioGroup.js';
import FormControlLabel from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControlLabel/FormControlLabel.js';
import Radio from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Radio/Radio.js';
import Typography from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js';
import FormHelperText from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js';

function FieldRadioGroup({
  row,
  name,
  label,
  options,
  spacing,
  helperText,
  disabled = false,
  ...other
}) {
  const {
    control
  } = useFormContext();
  const labelledby = label ? `${name}-${label}` : '';
  return jsxRuntimeExports.jsx(Controller, {
    name: name,
    control: control,
    render: ({
      field,
      fieldState: {
        error
      }
    }) => jsxRuntimeExports.jsxs(FormControl, {
      component: "fieldset",
      children: [label && jsxRuntimeExports.jsx(FormLabel, {
        component: "legend",
        id: labelledby,
        sx: {
          typography: 'body2'
        },
        children: label
      }), jsxRuntimeExports.jsx(RadioGroup, {
        ...field,
        "aria-labelledby": labelledby,
        row: row,
        ...other,
        children: options.map(option => jsxRuntimeExports.jsxs("div", {
          children: [jsxRuntimeExports.jsx(FormControlLabel, {
            disabled: disabled,
            value: option.value,
            control: jsxRuntimeExports.jsx(Radio, {}),
            label: option.label,
            sx: {
              '&:not(:last-of-type)': {
                mb: spacing || 0
              },
              ...(row && {
                mr: 0,
                '&:not(:last-of-type)': {
                  mr: spacing || 2
                }
              })
            }
          }, option.value), option.info && jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: typeof option.info == 'string' ? jsxRuntimeExports.jsx(Typography, {
              sx: {
                color: 'var(--Scaling-Grey2, #696969)',
                fontFamily: 'Public Sans',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '22px',
                marginBottom: '16px'
              },
              children: option.info
            }) : option.info
          })]
        }, option.key))
      }), (!!error || helperText) && jsxRuntimeExports.jsx(FormHelperText, {
        error: !!error,
        sx: {
          mx: 0
        },
        children: error ? error?.message : helperText
      })]
    })
  });
}

export { FieldRadioGroup as default };
