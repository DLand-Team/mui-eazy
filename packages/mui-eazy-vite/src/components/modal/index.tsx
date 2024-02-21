import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { UseBooleanReturnType } from '../../hooks/use-boolean';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-container': {
    backdropFilter: 'blur(5px)',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    position: 'relative',
    top: '-200px',
  },
}));

interface ModalProps {
  openFlag: UseBooleanReturnType;
  title?: string;
  content?: () => React.JSX.Element;
  actionConfig?: { label: string; handleClick?: () => void; render?: () => React.JSX.Element }[];
  handleClose?: () => void;
}

export function Modal({ openFlag, content, actionConfig, title, handleClose }: ModalProps) {
  const Content = React.useMemo(() => content, [content]);
  const _handleClose = () => {
    openFlag.onFalse();
    handleClose!?.();
  };

  return (
    <>
      <BootstrapDialog
        onClick={(e) => {
          e.stopPropagation();
        }}
        onClose={_handleClose}
        aria-labelledby="customized-dialog-title"
        open={openFlag.value}
      >
        <>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {title}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={_handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            {Content ? (
              <Stack
                sx={{
                  width: '500px',
                }}
              >
                <Content />
              </Stack>
            ) : (
              <>
                <Typography gutterBottom></Typography>
                <Typography gutterBottom>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                  metus auctor fringilla.
                </Typography>
              </>
            )}
          </DialogContent>
          <DialogActions>
            {actionConfig?.map((item) => {
              const { label, handleClick, render } = item;
              let node = render ? (
                render()
              ) : (
                <Button autoFocus onClick={handleClick}>
                  {label}
                </Button>
              );
              return node;
            })}
          </DialogActions>
        </>
      </BootstrapDialog>
    </>
  );
}

const modalApi = (props: ModalProps) => {
  let dom = document.getElementById('modal_node');
  if (dom) {
    dom.remove();
  }
  dom = document.createElement('div');
  dom.setAttribute('id', 'modal_node');
  document.body.appendChild(dom);
  const node = <Modal {...props} openFlag={props.openFlag}></Modal>;
  createRoot(dom).render(node);
};

Modal.confirm = (props: ModalProps) => {
  return modalApi(props);
};
