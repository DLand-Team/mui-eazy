import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { SxProps, alpha } from '@mui/material/styles';
import { FileThumbnail } from '../../../file-thumbnail';
import { Iconify } from '../../../iconify';
import { Box, Theme } from '@mui/material';
import { CustomFile, UploadProps } from '../../types';
import { useRef } from 'react';
import { DndProvider, XYCoord, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// ----------------------------------------------------------------------
export const ItemTypes = {
  CARD: 'card',
};
interface DragItem {
  index: number;
  id: string;
  type: string;
}

function Card({
  index,
  file,
  onRemove,
  sx = {},
  moveCard,
}: {
  index: number;
  onRemove: ((fileName: string | CustomFile, fileIndex?: number | undefined) => void) | undefined;
  file: string;
  sx: SxProps<Theme> | undefined;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string | symbol | null }>({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
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
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard?.(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id: file, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <Stack
      ref={ref}
      data-handler-id={handlerId}
      key={file}
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        my: 1,
        py: 1,
        px: 1.5,
        borderRadius: 1,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
        opacity: opacity,
        ...sx,
      }}
    >
      <FileThumbnail file={file} />

      <ListItemText
        primary={file.split('/').slice(-1)[0]}
        secondary={''}
        secondaryTypographyProps={{
          component: 'span',
          typography: 'caption',
        }}
      />

      {onRemove && (
        <IconButton
          size="small"
          onClick={() => {
            onRemove(file);
          }}
        >
          <Iconify icon="mingcute:close-line" width={16} />
        </IconButton>
      )}
    </Stack>
  );
}
export default function MultiFilePreview({ fileNameList, onRemove, sx, moveCard }: UploadProps) {
  return (
    <Box>
      <DndProvider backend={HTML5Backend}>
        {fileNameList?.map((file, index) => {
          return (
            <div key={file}>
              <Card index={index} moveCard={moveCard!} file={file} onRemove={onRemove} sx={sx} />
            </div>
          );
        })}
      </DndProvider>
    </Box>
  );
}
