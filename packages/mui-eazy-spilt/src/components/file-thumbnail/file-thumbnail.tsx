import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import fileSvg from './ic_file.svg';
// ----------------------------------------------------------------------

type FileIconProps = {
  file: string;
  sx?: SxProps<Theme>;
};

export function FileThumbnail({ file, sx }: FileIconProps) {
  const format = 'image';
  const renderContent =
    format === 'image' ? (
      <Box
        component="img"
        src={file as string}
        onError={(_) => {
          //@ts-ignore
          _.target.src = fileSvg;
        }}
        sx={{
          width: 52,
          height: 52,
          flexShrink: 0,
          ...sx,
        }}
      />
    ) : (
      ''
    );

  return <>{renderContent}</>;
}
