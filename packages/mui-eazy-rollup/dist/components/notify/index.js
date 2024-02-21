import { enqueueSnackbar } from '../../node_modules/.pnpm/notistack@3.0.1_csstype@3.1.3_react-dom@18.2.0_react@18.2.0/node_modules/notistack/notistack.esm.js';
import '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';

const optionPreset = {
  autoHideDuration: 2000,
  anchorOrigin: {
    horizontal: "right",
    vertical: "top"
  }
};
const notify = {
  info: (...args) => {
    const [message, options] = args;
    enqueueSnackbar(message, {
      ...optionPreset,
      ...options,
      variant: "info"
    });
  },
  error: (...args) => {
    const [message, options] = args;
    enqueueSnackbar(message, {
      ...optionPreset,
      ...options,
      variant: "error"
    });
  },
  success: (...args) => {
    const [message, options] = args;
    enqueueSnackbar(message, {
      ...optionPreset,
      ...options,
      variant: "success"
    });
  },
  warn: (...args) => {
    const [message, options] = args;
    enqueueSnackbar(message, {
      ...optionPreset,
      ...options,
      variant: "warning"
    });
  }
};

export { notify };
