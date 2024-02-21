import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Iconify } from '../iconify/iconify.js';
import { useState } from 'react';
import { fileFormat } from './utils.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';

function FileThumbnail({
  fileName,
  file,
  sx
}) {
  const [format, setFormat] = useState(file ? file?.type.includes('image') ? 'image' : 'other' : fileFormat(fileName));
  const renderContent = format === 'image' ? jsxRuntimeExports.jsx(Box, {
    component: "img",
    src: fileName,
    onError: _ => {
      //@ts-ignore
      // _.target.src = fileSvg;
      setFormat('other');
    },
    sx: {
      width: 52,
      height: 52,
      flexShrink: 0,
      ...sx
    }
  }) : jsxRuntimeExports.jsx(Box, {
    component: () => jsxRuntimeExports.jsx(Iconify, {
      icon: 'mdi:file-code-outline'
    }),
    sx: {
      width: 52,
      height: 52,
      flexShrink: 0,
      ...sx
    }
  });
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: renderContent
  });
}

export { FileThumbnail };
