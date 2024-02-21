import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import useTheme from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js';
import GlobalStyles from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/GlobalStyles/GlobalStyles.js';
import { alpha } from '@mui/system';

// ----------------------------------------------------------------------
function StyledLightbox() {
  const theme = useTheme();
  const inputGlobalStyles = jsxRuntimeExports.jsx(GlobalStyles, {
    styles: {
      '.yarl__root': {
        '--yarl__thumbnails_thumbnail_padding': 0,
        '--yarl__thumbnails_thumbnail_border': 'transparent',
        '--yarl__color_backdrop': alpha(theme.palette.grey[900], 0.9),
        '--yarl__slide_captions_container_background': alpha(theme.palette.grey[900], 0.48)
      },
      // Caption
      '.yarl__slide_title': {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
        lineHeight: theme.typography.h5.lineHeight
      },
      '.yarl__slide_description': {
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
        lineHeight: theme.typography.body2.lineHeight
      },
      // Button
      '.yarl__button': {
        filter: 'unset'
      },
      // Thumbnails
      '.yarl__thumbnails_thumbnail': {
        opacity: 0.48,
        '&.yarl__thumbnails_thumbnail_active': {
          opacity: 1
        }
      },
      '.yarl__thumbnails_vignette': {
        '--yarl__thumbnails_vignette_size': 0
      },
      // Video
      '.yarl__video_container': {
        backgroundColor: theme.palette.common.black
      }
    }
  });
  return inputGlobalStyles;
}

export { StyledLightbox as default };
