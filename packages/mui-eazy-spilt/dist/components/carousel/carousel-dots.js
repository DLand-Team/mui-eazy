import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import styled from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import Stack from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js';

const StyledRoot = styled(Box, {
  shouldForwardProp: prop => prop !== 'rounded'
})(({
  rounded,
  theme
}) => ({
  zIndex: 9,
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  '& li': {
    width: 18,
    height: 18,
    opacity: 0.32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&.slick-active': {
      opacity: 1,
      ...(rounded && {
        '& span': {
          width: 16,
          borderRadius: 6
        }
      })
    }
  }
}));
const StyledDot = styled('span')(({
  theme
}) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short
  })
}));
function CarouselDots(props) {
  const rounded = props?.rounded || false;
  const sx = props?.sx;
  return {
    appendDots: dots => jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: jsxRuntimeExports.jsx(StyledRoot, {
        component: "ul",
        rounded: rounded,
        sx: {
          ...sx
        },
        ...props,
        children: dots
      })
    }),
    customPaging: () => jsxRuntimeExports.jsx(Stack, {
      component: "div",
      alignItems: "center",
      justifyContent: "center",
      sx: {
        width: 1,
        height: 1
      },
      children: jsxRuntimeExports.jsx(StyledDot, {
        sx: {
          bgcolor: 'currentColor'
        }
      })
    })
  };
}

export { CarouselDots as default };
