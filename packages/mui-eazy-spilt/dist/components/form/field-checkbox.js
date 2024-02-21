import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import FormControlLabel from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControlLabel/FormControlLabel.js';
import Checkbox from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Checkbox/Checkbox.js';
import FormHelperText from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js';
import FormControl from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/FormControl.js';
import FormLabel from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormLabel/FormLabel.js';
import FormGroup from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormGroup/FormGroup.js';
import formControlLabelClasses from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js';

function FieldCheckbox({
  name,
  helperText,
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
      return jsxRuntimeExports.jsxs("div", {
        children: [jsxRuntimeExports.jsx(FormControlLabel, {
          control: jsxRuntimeExports.jsx(Checkbox, {
            ...field,
            checked: field.value ? true : false
          }),
          ...other
        }), (!!error || helperText) && jsxRuntimeExports.jsx(FormHelperText, {
          error: !!error,
          children: error ? error?.message : helperText
        })]
      });
    }
  });
}
function FieldMultiCheckbox({
  row,
  name,
  label,
  options,
  spacing,
  helperText,
  sx,
  ...other
}) {
  const {
    control
  } = useFormContext();
  const getSelected = (selectedItems, item) => selectedItems.includes(item) ? selectedItems.filter(value => value !== item) : [...selectedItems, item];
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
        sx: {
          typography: 'body2'
        },
        children: label
      }), jsxRuntimeExports.jsx(FormGroup, {
        sx: {
          ...(row && {
            flexDirection: 'row'
          }),
          [`& .${formControlLabelClasses.root}`]: {
            '&:not(:last-of-type)': {
              mb: spacing || 0
            },
            ...(row && {
              mr: 0,
              '&:not(:last-of-type)': {
                mr: spacing || 2
              }
            })
          },
          ...sx
        },
        children: options.map(option => jsxRuntimeExports.jsx(FormControlLabel, {
          control: jsxRuntimeExports.jsx(Checkbox, {
            checked: field.value.includes(option.value),
            onChange: () => field.onChange(getSelected(field.value, option.value))
          }),
          label: option.label,
          ...other
        }, option.value))
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

export { FieldCheckbox, FieldMultiCheckbox };
