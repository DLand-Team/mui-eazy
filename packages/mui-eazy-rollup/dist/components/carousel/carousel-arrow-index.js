import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { LeftIcon, RightIcon } from './arrow-icons.js';
import '../../utils/highlight.js';
import '../../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';
import '../../utils/myDay.js';
import '@mui/material';
import 'react';
import '../../hooks/use-fields.js';
import '../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import '../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../upload/upload-drag/cropModal.js';
import '../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/dist/quill.snow.css.js';
import '../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../editor/styles.js';
import '../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';
import { bgBlur } from '../../utils/themeUtil.js';
import styled from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import IconButton from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js';
import useTheme from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js';
import Typography from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js';

// ----------------------------------------------------------------------
const StyledRoot = styled(Box)(({
  theme
}) => ({
  ...bgBlur({
    opacity: 0.48,
    color: theme.palette.grey[900]
  }),
  zIndex: 9,
  display: 'inline-flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  padding: theme.spacing(0.25),
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius
}));
const StyledIconButton = styled(IconButton)({
  width: 28,
  height: 28,
  padding: 0,
  opacity: 0.48,
  '&:hover': {
    opacity: 1
  }
});
function CarouselArrowIndex({
  index,
  total,
  onNext,
  onPrev,
  icon,
  sx,
  ...other
}) {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';
  return jsxRuntimeExports.jsxs(StyledRoot, {
    sx: sx,
    ...other,
    children: [jsxRuntimeExports.jsx(StyledIconButton, {
      color: "inherit",
      onClick: onPrev,
      children: jsxRuntimeExports.jsx(LeftIcon, {
        icon: icon,
        isRTL: isRTL
      })
    }), jsxRuntimeExports.jsxs(Typography, {
      variant: "subtitle2",
      component: "span",
      sx: {
        mx: 0.25
      },
      children: [index + 1, "/", total]
    }), jsxRuntimeExports.jsx(StyledIconButton, {
      color: "inherit",
      onClick: onNext,
      children: jsxRuntimeExports.jsx(RightIcon, {
        icon: icon,
        isRTL: isRTL
      })
    })]
  });
}

export { CarouselArrowIndex as default };
