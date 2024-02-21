import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useRef, useEffect } from 'react';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import { Editor } from '../editor/editor.js';
import FormHelperText from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js';

function FieldEditor({
  name,
  helperText,
  id,
  ...other
}) {
  const {
    control,
    watch,
    setValue,
    formState: {
      isSubmitSuccessful
    }
  } = useFormContext();
  const values = watch();
  const ref = useRef('edit' + Date.now().toString());
  useEffect(() => {
    if (values[name] === '<p><br></p>') {
      setValue(name, '', {
        shouldValidate: !isSubmitSuccessful
      });
    }
  }, [isSubmitSuccessful, name, setValue, values]);
  return jsxRuntimeExports.jsx(Controller, {
    name: name,
    control: control,
    render: ({
      field,
      fieldState: {
        error
      }
    }) => jsxRuntimeExports.jsx(Editor, {
      id: ref.current,
      value: field.value,
      onChange: field.onChange,
      error: !!error,
      sx: {
        width: '100%'
      },
      helperText: (!!error || helperText) && jsxRuntimeExports.jsx(FormHelperText, {
        error: !!error,
        sx: {
          px: 2
        },
        children: error ? error?.message : helperText
      }),
      ...other
    })
  });
}

export { FieldEditor as default };
