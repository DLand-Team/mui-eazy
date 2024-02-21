import { j as jsxRuntimeExports } from '../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Box } from '@mui/material';
import { useRef } from 'react';
import { HTML5Backend } from '../../../../node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/index.js';
import { FileThumbnail } from '../../../file-thumbnail/file-thumbnail.js';
import { Iconify } from '../../../iconify/iconify.js';
import { DndProvider } from '../../../../node_modules/.pnpm/react-dnd@16.0.1_@types_node@20.11.19_@types_react@18.2.57_react@18.2.0/node_modules/react-dnd/dist/core/DndProvider.js';
import { useDrop } from '../../../../node_modules/.pnpm/react-dnd@16.0.1_@types_node@20.11.19_@types_react@18.2.57_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js';
import { useDrag } from '../../../../node_modules/.pnpm/react-dnd@16.0.1_@types_node@20.11.19_@types_react@18.2.57_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js';
import Stack from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js';
import ListItemText from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ListItemText/ListItemText.js';
import IconButton from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js';
import { alpha } from '@mui/system';

// ----------------------------------------------------------------------
const ItemTypes = {
  CARD: 'card'
};
function Card({
  index,
  file,
  fileName,
  onRemove,
  sx = {},
  moveCard
}) {
  const ref = useRef(null);
  const [{
    handlerId
  }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard?.(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{
    isDragging
  }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return {
        id: file,
        index
      };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return jsxRuntimeExports.jsxs(Stack, {
    ref: ref,
    "data-handler-id": handlerId,
    spacing: 2,
    direction: "row",
    alignItems: "center",
    sx: {
      my: 1,
      py: 1,
      px: 1.5,
      borderRadius: 1,
      border: theme => `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
      opacity: opacity,
      ...sx
    },
    children: [jsxRuntimeExports.jsx(FileThumbnail, {
      fileName: fileName,
      file: file
    }), jsxRuntimeExports.jsx(ListItemText, {
      primary: fileName.split('/').slice(-1)[0],
      secondary: '',
      secondaryTypographyProps: {
        component: 'span',
        typography: 'caption'
      }
    }), onRemove && jsxRuntimeExports.jsx(IconButton, {
      size: "small",
      onClick: () => {
        onRemove(fileName);
      },
      children: jsxRuntimeExports.jsx(Iconify, {
        icon: "mingcute:close-line",
        width: 16
      })
    })]
  }, fileName);
}
function MultiFilePreview({
  fileNameList,
  onRemove,
  sx,
  moveCard,
  files
}) {
  return jsxRuntimeExports.jsx(Box, {
    children: jsxRuntimeExports.jsx(DndProvider, {
      backend: HTML5Backend,
      children: fileNameList?.map((file, index) => {
        return jsxRuntimeExports.jsx("div", {
          children: jsxRuntimeExports.jsx(Card, {
            index: index,
            moveCard: moveCard,
            file: files?.[index],
            fileName: file,
            onRemove: onRemove,
            sx: sx
          })
        }, file);
      })
    })
  });
}

export { ItemTypes, MultiFilePreview as default };
