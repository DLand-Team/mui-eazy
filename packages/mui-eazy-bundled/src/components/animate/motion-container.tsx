import { m, MotionProps } from 'framer-motion';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps;

export interface MotionContainerProps extends IProps {
  animate?: boolean;
  action?: boolean;
}

export function MotionContainer({
  animate,
  action = false,
  children,
  ...other
}: MotionContainerProps) {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
