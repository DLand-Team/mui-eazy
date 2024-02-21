import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import TextField from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TextField/TextField.js';
import FormControl from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/FormControl.js';
import InputLabel from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/InputLabel/InputLabel.js';
import Select from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Select/Select.js';
import OutlinedInput from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/OutlinedInput/OutlinedInput.js';
import MenuItem from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuItem/MenuItem.js';
import Checkbox from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Checkbox/Checkbox.js';
import FormHelperText from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import Chip from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Chip/Chip.js';

function FieldSelect({
  name,
  native = false,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
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
    }) => jsxRuntimeExports.jsx(TextField, {
      ...field,
      value: field.value || "",
      select: true,
      fullWidth: true,
      SelectProps: {
        native,
        MenuProps: {
          PaperProps: {
            sx: {
              ...(!native && {
                maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset'
              }),
              ...PaperPropsSx
            }
          }
        },
        sx: {
          textTransform: 'capitalize'
        }
      },
      error: !!error,
      helperText: error ? error?.message : helperText,
      ...other,
      children: children
    })
  });
}
function FieldMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  sx,
  ...other
}) {
  const {
    control
  } = useFormContext();
  const renderValues = selectedIds => {
    const selectedItems = options.filter(item => selectedIds.includes(item.value));
    if (!selectedItems.length && placeholder) {
      return jsxRuntimeExports.jsx(Box, {
        component: "em",
        sx: {
          color: 'text.disabled'
        },
        children: placeholder
      });
    }
    if (chip) {
      return jsxRuntimeExports.jsx(Box, {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5
        },
        children: selectedItems.map(item => jsxRuntimeExports.jsx(Chip, {
          size: "small",
          label: item.label
        }, item.value))
      });
    }
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: selectedItems.map(item => item.label).join(', ')
    });
  };
  return jsxRuntimeExports.jsx(Controller, {
    name: name,
    control: control,
    render: ({
      field,
      fieldState: {
        error
      }
    }) => {
      const {
        value,
        ...rest
      } = field;
      let temp = Array.isArray(value) ? value : [];
      return jsxRuntimeExports.jsxs(FormControl, {
        sx: sx,
        children: [label && jsxRuntimeExports.jsxs(InputLabel, {
          id: name,
          children: [" ", label, " "]
        }), jsxRuntimeExports.jsxs(Select, {
          ...rest,
          value: temp,
          multiple: true,
          displayEmpty: !!placeholder,
          labelId: name,
          input: jsxRuntimeExports.jsx(OutlinedInput, {
            fullWidth: true,
            label: label,
            error: !!error
          }),
          renderValue: renderValues,
          ...other,
          children: [placeholder && jsxRuntimeExports.jsx(MenuItem, {
            disabled: true,
            value: "",
            children: jsxRuntimeExports.jsxs("em", {
              children: [" ", placeholder, " "]
            })
          }), options.map(option => {
            const selected = field.value.includes(option.value);
            return jsxRuntimeExports.jsxs(MenuItem, {
              value: option.value,
              children: [checkbox && jsxRuntimeExports.jsx(Checkbox, {
                size: "small",
                disableRipple: true,
                checked: selected
              }), option.label]
            }, option.value);
          })]
        }), (!!error || helperText) && jsxRuntimeExports.jsx(FormHelperText, {
          error: !!error,
          children: error ? error?.message : helperText
        })]
      });
    }
  });
}

export { FieldMultiSelect, FieldSelect };
