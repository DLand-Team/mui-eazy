import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { LeftIcon, RightIcon } from './arrow-icons.js';
import styled from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js';
import IconButton from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js';
import useTheme from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js';
import Stack from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js';
import { alpha } from '@mui/system';

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'filled' && prop !== 'hasChild' && prop !== 'shape'
})(({
  filled,
  shape,
  hasChild,
  theme
}) => ({
  color: 'inherit',
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.shorter
  }),
  ...(shape === 'rounded' && {
    borderRadius: theme.shape.borderRadius * 1.5
  }),
  ...(!filled && {
    opacity: 0.48,
    '&:hover': {
      opacity: 1
    }
  }),
  ...(filled && {
    color: alpha(theme.palette.common.white, 0.8),
    backgroundColor: alpha(theme.palette.grey[900], 0.48),
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[900]
    }
  }),
  ...(hasChild && {
    zIndex: 9,
    top: '50%',
    position: 'absolute',
    marginTop: theme.spacing(-2.5)
  })
}));
function CarouselArrows({
  shape = 'circular',
  filled = false,
  icon,
  onNext,
  onPrev,
  children,
  leftButtonProps,
  rightButtonProps,
  sx,
  ...other
}) {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';
  const hasChild = !!children;
  if (hasChild) {
    return jsxRuntimeExports.jsxs(Stack, {
      sx: sx,
      ...other,
      children: [onNext && jsxRuntimeExports.jsx(StyledIconButton, {
        filled: filled,
        shape: shape,
        hasChild: !!children,
        onClick: onPrev,
        ...leftButtonProps,
        sx: {
          left: 16,
          ...leftButtonProps?.sx
        },
        children: jsxRuntimeExports.jsx(LeftIcon, {
          icon: icon,
          isRTL: isRTL
        })
      }), children, onPrev && jsxRuntimeExports.jsx(StyledIconButton, {
        filled: filled,
        shape: shape,
        hasChild: !!children,
        onClick: onNext,
        ...rightButtonProps,
        sx: {
          right: 16,
          ...rightButtonProps?.sx
        },
        children: jsxRuntimeExports.jsx(RightIcon, {
          icon: icon,
          isRTL: isRTL
        })
      })]
    });
  }
  return jsxRuntimeExports.jsxs(Stack, {
    direction: "row",
    alignItems: "center",
    display: "inline-flex",
    sx: sx,
    ...other,
    children: [jsxRuntimeExports.jsx(StyledIconButton, {
      filled: filled,
      shape: shape,
      onClick: onPrev,
      ...leftButtonProps,
      children: jsxRuntimeExports.jsx(LeftIcon, {
        icon: icon,
        isRTL: isRTL
      })
    }), jsxRuntimeExports.jsx(StyledIconButton, {
      filled: filled,
      shape: shape,
      onClick: onNext,
      ...rightButtonProps,
      children: jsxRuntimeExports.jsx(RightIcon, {
        icon: icon,
        isRTL: isRTL
      })
    })]
  });
}

export { CarouselArrows as default };
