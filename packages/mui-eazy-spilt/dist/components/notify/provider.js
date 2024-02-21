import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { SnackbarProvider } from '../../node_modules/.pnpm/notistack@3.0.1_csstype@3.1.3_react-dom@18.2.0_react@18.2.0/node_modules/notistack/notistack.esm.js';

function NotifyProvider({
  children
}) {
  return jsxRuntimeExports.jsx(SnackbarProvider, {
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    maxSnack: 3,
    children: children
  });
}

export { NotifyProvider };
