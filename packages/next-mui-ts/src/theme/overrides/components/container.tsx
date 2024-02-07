import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function container(theme: Theme) {
  return {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  };
}
