import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { forwardRef } from 'react';
import { b as buildExports } from '../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import { getRatio } from './utils.js';
import useTheme from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import { alpha } from '@mui/system';

// ----------------------------------------------------------------------
const Image = /*#__PURE__*/forwardRef(({
  ratio,
  overlay,
  disabledEffect = false,
  //
  alt,
  src,
  afterLoad,
  delayTime,
  threshold,
  beforeLoad,
  delayMethod,
  placeholder,
  wrapperProps,
  scrollPosition,
  effect = 'blur',
  visibleByDefault,
  wrapperClassName,
  useIntersectionObserver,
  sx,
  ...other
}, ref) => {
  const theme = useTheme();
  const overlayStyles = !!overlay && {
    '&:before': {
      content: "''",
      top: 0,
      left: 0,
      width: 1,
      height: 1,
      zIndex: 1,
      position: 'absolute',
      background: overlay || alpha(theme.palette.grey[900], 0.48)
    }
  };
  const content = jsxRuntimeExports.jsx(Box, {
    component: buildExports.LazyLoadImage,
    //
    alt: alt,
    src: src,
    afterLoad: afterLoad,
    delayTime: delayTime,
    threshold: threshold,
    beforeLoad: beforeLoad,
    delayMethod: delayMethod,
    placeholder: placeholder,
    wrapperProps: wrapperProps,
    scrollPosition: scrollPosition,
    visibleByDefault: visibleByDefault,
    effect: disabledEffect ? undefined : effect,
    useIntersectionObserver: useIntersectionObserver,
    wrapperClassName: wrapperClassName || 'component-image-wrapper',
    placeholderSrc: disabledEffect ? '/assets/transparent.png' : '/assets/placeholder.svg',
    //
    sx: {
      width: 1,
      height: 1,
      objectFit: 'cover',
      verticalAlign: 'bottom',
      ...(!!ratio && {
        top: 0,
        left: 0,
        position: 'absolute'
      })
    }
  });
  return jsxRuntimeExports.jsx(Box, {
    ref: ref,
    component: "span",
    className: "component-image",
    sx: {
      overflow: 'hidden',
      position: 'relative',
      verticalAlign: 'bottom',
      display: 'inline-block',
      ...(!!ratio && {
        width: 1
      }),
      '& span.component-image-wrapper': {
        width: 1,
        height: 1,
        verticalAlign: 'bottom',
        backgroundSize: 'cover !important',
        ...(!!ratio && {
          pt: getRatio(ratio)
        })
      },
      ...overlayStyles,
      ...sx
    },
    ...other,
    children: content
  });
});

export { Image };
