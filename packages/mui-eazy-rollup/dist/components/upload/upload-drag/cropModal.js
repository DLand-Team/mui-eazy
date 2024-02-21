import { j as jsxRuntimeExports } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import * as React from 'react';
import { useState } from 'react';
import { Iconify } from '../../iconify/iconify.js';
import { Demo } from './crop.js';
import { Alert } from '@mui/material';
import styled from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js';
import Dialog from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Dialog/Dialog.js';
import DialogTitle from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/DialogTitle/DialogTitle.js';
import IconButton from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js';
import DialogContent from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/DialogContent/DialogContent.js';
import DialogActions from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/DialogActions/DialogActions.js';
import Button from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js';

const BootstrapDialog = styled(Dialog)(({
  theme
}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
function CropModal({
  open,
  name,
  src,
  validateFunc,
  onComplete,
  setOpen
}) {
  const handleClose = () => {
    setErrFlag(false);
    setErrInfo('');
    setOpen(false);
  };
  const ref = React.useRef();
  const [errFlag, setErrFlag] = useState(false);
  const [errorInfo, setErrInfo] = useState('');
  return jsxRuntimeExports.jsx(React.Fragment, {
    children: jsxRuntimeExports.jsxs(BootstrapDialog, {
      onClose: handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: open,
      children: [jsxRuntimeExports.jsx(DialogTitle, {
        sx: {
          m: 0,
          p: 2
        },
        id: "customized-dialog-title",
        children: "Crop image"
      }), jsxRuntimeExports.jsx(IconButton, {
        "aria-label": "close",
        onClick: handleClose,
        sx: {
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500]
        },
        children: jsxRuntimeExports.jsx(Iconify, {
          icon: "mingcute:close-line",
          width: 16
        })
      }), jsxRuntimeExports.jsxs(DialogContent, {
        dividers: true,
        children: [errFlag && jsxRuntimeExports.jsx(Alert, {
          severity: "warning",
          sx: {
            mb: 3
          },
          children: errorInfo
        }), jsxRuntimeExports.jsx(Demo, {
          name: name,
          src: src,
          callRef: ref,
          onComplete: onComplete,
          validateFunc: file => {
            const [flag = true, info = 'error'] = validateFunc?.(file) || [];
            if (!flag) {
              setErrFlag(true);
              setErrInfo(info);
            }
            return [flag, info];
          }
        })]
      }), jsxRuntimeExports.jsx(DialogActions, {
        children: jsxRuntimeExports.jsx(Button, {
          autoFocus: true,
          onClick: () => {
            const [flag = true, info = ''] = ref.current?.() || [];
            setErrFlag(!flag);
            if (flag) {
              handleClose();
            } else {
              setErrInfo(info);
            }
          },
          children: "Ok"
        })
      })]
    })
  });
}

export { CropModal as default };
