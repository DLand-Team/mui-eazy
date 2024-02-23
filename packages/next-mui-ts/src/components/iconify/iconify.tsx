import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
//
import { IconifyProps } from './types';

// ----------------------------------------------------------------------

export interface MyIconifyProps extends BoxProps {
  icon: IconifyProps;
}

export const Iconify = forwardRef<SVGElement, MyIconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);
