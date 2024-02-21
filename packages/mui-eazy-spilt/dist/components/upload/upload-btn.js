import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useDropzone } from '../../node_modules/.pnpm/react-dropzone@14.2.3_react@18.2.0/node_modules/react-dropzone/dist/es/index.js';
import { Iconify } from '../iconify/iconify.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import { alpha } from '@mui/system';

// ----------------------------------------------------------------------
function UploadBtn({
  placeholder,
  error,
  disabled,
  sx,
  ...other
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  } = useDropzone({
    disabled,
    ...other
  });
  const hasError = isDragReject || error;
  return jsxRuntimeExports.jsxs(Box, {
    ...getRootProps(),
    sx: {
      m: 0.5,
      width: 64,
      height: 64,
      flexShrink: 0,
      display: 'flex',
      borderRadius: 1,
      cursor: 'pointer',
      alignItems: 'center',
      color: 'text.disabled',
      justifyContent: 'center',
      bgcolor: theme => alpha(theme.palette.grey[500], 0.08),
      border: theme => `dashed 1px ${alpha(theme.palette.grey[500], 0.16)}`,
      ...(isDragActive && {
        opacity: 0.72
      }),
      ...(disabled && {
        opacity: 0.48,
        pointerEvents: 'none'
      }),
      ...(hasError && {
        color: 'error.main',
        borderColor: 'error.main',
        bgcolor: theme => alpha(theme.palette.error.main, 0.08)
      }),
      '&:hover': {
        opacity: 0.72
      },
      ...sx
    },
    children: [jsxRuntimeExports.jsx("input", {
      ...getInputProps()
    }), placeholder || jsxRuntimeExports.jsx(Iconify, {
      icon: "eva:cloud-upload-fill",
      width: 28
    })]
  });
}

export { UploadBtn };
