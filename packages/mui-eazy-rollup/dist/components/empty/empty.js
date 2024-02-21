import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import Stack from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import Typography from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js';
import { alpha } from '@mui/system';

function Empty({
  title,
  imgUrl,
  action,
  filled,
  description,
  sx,
  ...other
}) {
  return jsxRuntimeExports.jsxs(Stack, {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    sx: {
      px: 3,
      height: 1,
      ...(filled && {
        borderRadius: 2,
        bgcolor: theme => alpha(theme.palette.grey[500], 0.04),
        border: theme => `dashed 1px ${alpha(theme.palette.grey[500], 0.08)}`
      }),
      ...sx
    },
    ...other,
    children: [jsxRuntimeExports.jsx(Box, {
      component: "img",
      alt: "empty content",
      src: imgUrl,
      sx: {
        width: 1,
        maxWidth: 160
      }
    }), title && jsxRuntimeExports.jsx(Typography, {
      variant: "h6",
      component: "span",
      sx: {
        mt: 1,
        color: 'text.disabled',
        textAlign: 'center'
      },
      children: title
    }), description && jsxRuntimeExports.jsx(Typography, {
      variant: "caption",
      sx: {
        mt: 1,
        color: 'text.disabled',
        textAlign: 'center'
      },
      children: description
    }), action && action]
  });
}

export { Empty };
