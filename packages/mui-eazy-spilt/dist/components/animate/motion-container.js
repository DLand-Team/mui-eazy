import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { varContainer } from './variants/container.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import { m } from '../../node_modules/.pnpm/framer-motion@10.18.0_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion-minimal.js';

function MotionContainer({
  animate,
  action = false,
  children,
  ...other
}) {
  if (action) {
    return jsxRuntimeExports.jsx(Box, {
      component: m.div,
      initial: false,
      animate: animate ? 'animate' : 'exit',
      variants: varContainer(),
      ...other,
      children: children
    });
  }
  return jsxRuntimeExports.jsx(Box, {
    component: m.div,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: varContainer(),
    ...other,
    children: children
  });
}

export { MotionContainer };
