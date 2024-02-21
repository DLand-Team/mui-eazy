import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import default_1 from '../../node_modules/.pnpm/@mui_icons-material@5.15.10_@mui_material@5.15.10_@types_react@18.2.57_react@18.2.0/node_modules/@mui/icons-material/Close.js';
import { Stack } from '@mui/material';
import * as React from 'react';
import { createRoot } from '../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js';
import styled from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js';
import Dialog from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Dialog/Dialog.js';
import DialogTitle from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/DialogTitle/DialogTitle.js';
import IconButton from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js';
import DialogContent from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/DialogContent/DialogContent.js';
import Typography from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js';
import DialogActions from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/DialogActions/DialogActions.js';
import Button from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js';

const BootstrapDialog = styled(Dialog)(({
  theme
}) => ({
  "& .MuiDialog-container": {
    backdropFilter: "blur(5px)"
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  },
  "& .MuiDialog-paper": {
    position: "relative",
    top: "-200px"
  }
}));
function Modal({
  openFlag,
  content,
  actionConfig,
  title,
  handleClose
}) {
  const Content = React.useMemo(() => content, [content]);
  const _handleClose = () => {
    openFlag.onFalse();
    handleClose?.();
  };
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsx(BootstrapDialog, {
      onClick: e => {
        e.stopPropagation();
      },
      onClose: _handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: openFlag.value,
      children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(DialogTitle, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: title
        }), jsxRuntimeExports.jsx(IconButton, {
          "aria-label": "close",
          onClick: _handleClose,
          sx: {
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          },
          children: jsxRuntimeExports.jsx(default_1, {})
        }), jsxRuntimeExports.jsx(DialogContent, {
          children: Content ? jsxRuntimeExports.jsx(Stack, {
            sx: {
              width: "500px"
            },
            children: jsxRuntimeExports.jsx(Content, {})
          }) : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(Typography, {
              gutterBottom: true
            }), jsxRuntimeExports.jsx(Typography, {
              gutterBottom: true,
              children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
            }), jsxRuntimeExports.jsx(Typography, {
              gutterBottom: true,
              children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
            })]
          })
        }), jsxRuntimeExports.jsx(DialogActions, {
          children: actionConfig?.map(item => {
            const {
              label,
              handleClick,
              render
            } = item;
            let node = render ? render() : jsxRuntimeExports.jsx(Button, {
              autoFocus: true,
              onClick: handleClick,
              children: label
            });
            return node;
          })
        })]
      })
    })
  });
}
const modalApi = props => {
  let dom = document.getElementById("modal_node");
  if (dom) {
    dom.remove();
  }
  dom = document.createElement("div");
  dom.setAttribute("id", "modal_node");
  document.body.appendChild(dom);
  const node = jsxRuntimeExports.jsx(Modal, {
    ...props,
    openFlag: props.openFlag
  });
  createRoot(dom).render(node);
};
Modal.confirm = props => {
  return modalApi(props);
};

export { Modal };
