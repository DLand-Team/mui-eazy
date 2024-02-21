import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { Iconify } from '../iconify';
import { useState } from 'react';
import { fileFormat } from './utils';
// ----------------------------------------------------------------------

type FileIconProps = {
  file: File;
  fileName: string;
  sx?: SxProps<Theme>;
};

export function FileThumbnail({ fileName, file, sx }: FileIconProps) {
  const [format, setFormat] = useState(
    file ? (file?.type.includes('image') ? 'image' : 'other') : fileFormat(fileName)
  );
  const renderContent =
    format === 'image' ? (
      <Box
        component="img"
        src={fileName}
        onError={(_) => {
          //@ts-ignore
          // _.target.src = fileSvg;
          setFormat('other');
        }}
        sx={{
          width: 52,
          height: 52,
          flexShrink: 0,
          ...sx,
        }}
      />
    ) : (
      <Box
        component={() => <Iconify icon={'mdi:file-code-outline'} />}
        sx={{
          width: 52,
          height: 52,
          flexShrink: 0,
          ...sx,
        }}
      />
    );

  return <>{renderContent}</>;
}
