import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { forwardRef } from 'react';
import { Icon } from '../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';

const Iconify = /*#__PURE__*/forwardRef(({
  icon,
  width = 20,
  sx,
  ...other
}, ref) => jsxRuntimeExports.jsx(Box, {
  ref: ref,
  component: Icon,
  className: "component-iconify",
  icon: icon,
  sx: {
    width,
    height: width,
    ...sx
  },
  ...other
}));

export { Iconify };
