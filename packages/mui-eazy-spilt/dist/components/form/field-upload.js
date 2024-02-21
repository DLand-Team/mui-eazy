import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import { useEffect } from 'react';
import '../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import { UploadBtn } from '../upload/upload-btn.js';
import { UploadDrag } from '../upload/upload-drag/index.js';
import '@mui/material';
import '../upload/upload-drag/cropModal.js';
import FormHelperText from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js';

// ----------------------------------------------------------------------
function FieldUploadBox({
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
    }) => jsxRuntimeExports.jsx(UploadBtn, {
      files: field.value,
      error: !!error,
      ...other
    })
  });
}
// ----------------------------------------------------------------------
function FieldUpload({
  accept,
  name,
  multiple,
  helperText,
  onUpload,
  isCrop,
  ...other
}) {
  const {
    control,
    setValue,
    getValues,
    watch,
    trigger
  } = useFormContext();
  useEffect(() => {
    const subscription = watch((_, info) => {
      if (info.name == name) {
        trigger(name);
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  return jsxRuntimeExports.jsx(Controller, {
    name: name,
    control: control,
    render: ({
      field,
      fieldState: {
        error
      }
    }) => jsxRuntimeExports.jsx(UploadDrag, {
      isCrop: isCrop,
      multiple: multiple,
      accept: accept || {
        'image/*': []
      },
      files: multiple ? field.value : field.value ? [field.value] : [],
      error: !!error,
      onOrder: fileUrls => {
        setValue(name, fileUrls);
      },
      onAdd: fileUrl => {
        if (multiple) {
          const fileList = getValues(name) || [];
          setValue(name, [...fileList, fileUrl]);
        } else {
          setValue(name, fileUrl);
        }
      },
      onDel: fileUrl => {
        if (multiple) {
          let fileList = getValues(name);
          let targetid = fileList.findIndex(item => {
            return item == fileUrl;
          });
          fileList.splice(targetid, 1);
          setValue(name, fileList);
        } else {
          setValue(name, null);
        }
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

export { FieldUpload, FieldUploadBox };
