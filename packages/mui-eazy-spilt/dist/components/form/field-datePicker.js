import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import '../../utils/myDay.js';
import { LocalizationProvider } from '../../node_modules/.pnpm/@mui_x-date-pickers@6.19.4_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_material@5.15._vkyhxk24oxhg755pgjcx74cfbu/node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js';
import { AdapterDayjs } from '../../node_modules/.pnpm/@mui_x-date-pickers@6.19.4_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_material@5.15._vkyhxk24oxhg755pgjcx74cfbu/node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js';
import dayjs from '../../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js';
import { DatePicker } from '../../node_modules/.pnpm/@mui_x-date-pickers@6.19.4_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_material@5.15._vkyhxk24oxhg755pgjcx74cfbu/node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js';
import FormHelperText from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js';

function FieldDatePicker({
  name,
  helperText,
  ...other
}) {
  const {
    control
  } = useFormContext();
  return jsxRuntimeExports.jsx(LocalizationProvider, {
    dateAdapter: AdapterDayjs,
    adapterLocale: 'zh-cn',
    children: jsxRuntimeExports.jsx(Controller, {
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
        let temp = value;
        if (typeof value == 'string') {
          temp = dayjs(value);
        }
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [jsxRuntimeExports.jsx(DatePicker, {
            ...rest,
            value: temp,
            ...other
          }), (!!error || helperText) && jsxRuntimeExports.jsx(FormHelperText, {
            error: !!error,
            children: error ? error?.message : helperText
          })]
        });
      }
    })
  });
}

export { FieldDatePicker as default };
