import { j as jsxRuntimeExports } from '../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Image } from '../../../image/image.js';
import { fileFormat } from '../../../file-thumbnail/utils.js';
import { Iconify } from '../../../iconify/iconify.js';
import Box from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';

function SingleFilePreview({
  imgUrl = ''
}) {
  const format = fileFormat(imgUrl);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsx(Box, {
      sx: {
        p: 1,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        position: 'absolute'
      },
      children: format == 'image' ? jsxRuntimeExports.jsx(Image, {
        alt: "file preview",
        src: imgUrl,
        sx: {
          width: 1,
          height: 1,
          borderRadius: 1
        }
      }) : jsxRuntimeExports.jsx(Box, {
        component: () => jsxRuntimeExports.jsx(Iconify, {
          icon: 'mdi:file-code-outline'
        }),
        sx: {
          width: 1,
          height: 1,
          borderRadius: 1
        }
      })
    })
  });
}

export { SingleFilePreview as default };
