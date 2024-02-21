import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Lightbox as Lightbox$1, useLightboxState } from '../../node_modules/.pnpm/yet-another-react-lightbox@3.17.0_react-dom@18.2.0_react@18.2.0/node_modules/yet-another-react-lightbox/dist/index.js';
import Zoom from '../../node_modules/.pnpm/yet-another-react-lightbox@3.17.0_react-dom@18.2.0_react@18.2.0/node_modules/yet-another-react-lightbox/dist/plugins/zoom/index.js';
import Video from '../../node_modules/.pnpm/yet-another-react-lightbox@3.17.0_react-dom@18.2.0_react@18.2.0/node_modules/yet-another-react-lightbox/dist/plugins/video/index.js';
import Captions from '../../node_modules/.pnpm/yet-another-react-lightbox@3.17.0_react-dom@18.2.0_react@18.2.0/node_modules/yet-another-react-lightbox/dist/plugins/captions/index.js';
import Slideshow from '../../node_modules/.pnpm/yet-another-react-lightbox@3.17.0_react-dom@18.2.0_react@18.2.0/node_modules/yet-another-react-lightbox/dist/plugins/slideshow/index.js';
import Fullscreen from '../../node_modules/.pnpm/yet-another-react-lightbox@3.17.0_react-dom@18.2.0_react@18.2.0/node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js';
import Thumbnails from '../../node_modules/.pnpm/yet-another-react-lightbox@3.17.0_react-dom@18.2.0_react@18.2.0/node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js';
import { Iconify } from '../iconify/iconify.js';
import StyledLightbox from './styles.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';

// ----------------------------------------------------------------------
const ICON_SIZE = 24;
function Lightbox({
  slides,
  disabledZoom,
  disabledVideo,
  disabledTotal,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen,
  onGetCurrentIndex,
  ...other
}) {
  const totalItems = slides ? slides.length : 0;
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(StyledLightbox, {}), jsxRuntimeExports.jsx(Lightbox$1, {
      slides: slides,
      animation: {
        swipe: 240
      },
      carousel: {
        finite: totalItems < 5
      },
      controller: {
        closeOnBackdropClick: true
      },
      plugins: getPlugins({
        disabledZoom,
        disabledVideo,
        disabledCaptions,
        disabledSlideshow,
        disabledThumbnails,
        disabledFullscreen
      }),
      on: {
        view: ({
          index
        }) => {
          if (onGetCurrentIndex) {
            onGetCurrentIndex(index);
          }
        }
      },
      toolbar: {
        buttons: [jsxRuntimeExports.jsx(DisplayTotal, {
          totalItems: totalItems,
          disabledTotal: disabledTotal
        }, 0), 'close']
      },
      render: {
        iconClose: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE,
          icon: "carbon:close"
        }),
        iconZoomIn: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE,
          icon: "carbon:zoom-in"
        }),
        iconZoomOut: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE,
          icon: "carbon:zoom-out"
        }),
        iconSlideshowPlay: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE,
          icon: "carbon:play"
        }),
        iconSlideshowPause: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE,
          icon: "carbon:pause"
        }),
        iconPrev: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE + 8,
          icon: "carbon:chevron-left"
        }),
        iconNext: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE + 8,
          icon: "carbon:chevron-right"
        }),
        iconExitFullscreen: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE,
          icon: "carbon:center-to-fit"
        }),
        iconEnterFullscreen: () => jsxRuntimeExports.jsx(Iconify, {
          width: ICON_SIZE,
          icon: "carbon:fit-to-screen"
        })
      },
      ...other
    })]
  });
}
// ----------------------------------------------------------------------
function getPlugins({
  disabledZoom,
  disabledVideo,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen
}) {
  let plugins = [Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom];
  if (disabledThumbnails) {
    plugins = plugins.filter(plugin => plugin !== Thumbnails);
  }
  if (disabledCaptions) {
    plugins = plugins.filter(plugin => plugin !== Captions);
  }
  if (disabledFullscreen) {
    plugins = plugins.filter(plugin => plugin !== Fullscreen);
  }
  if (disabledSlideshow) {
    plugins = plugins.filter(plugin => plugin !== Slideshow);
  }
  if (disabledZoom) {
    plugins = plugins.filter(plugin => plugin !== Zoom);
  }
  if (disabledVideo) {
    plugins = plugins.filter(plugin => plugin !== Video);
  }
  return plugins;
}
function DisplayTotal({
  totalItems,
  disabledTotal
}) {
  const {
    currentIndex
  } = useLightboxState();
  if (disabledTotal) {
    return null;
  }
  return jsxRuntimeExports.jsxs(Box, {
    component: "span",
    className: "yarl__button",
    sx: {
      typography: 'body2',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center'
    },
    children: [jsxRuntimeExports.jsxs("strong", {
      children: [" ", currentIndex + 1, " "]
    }), " / ", totalItems]
  });
}

export { DisplayTotal, Lightbox as default, getPlugins };
