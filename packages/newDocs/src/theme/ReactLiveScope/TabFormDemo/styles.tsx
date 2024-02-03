import { Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';

export const TypographyNode = ({ children }: { children: ReactNode }) => {
  return (
    <Typography variant="h4" sx={{}}>
      {children}
    </Typography>
  );
};
export const DividerNode = () => {
  return (
    <Divider
      sx={{
        mb: 3,
        mt: 3,
      }}
    />
  );
};
