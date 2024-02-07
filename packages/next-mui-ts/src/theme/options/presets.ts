import { alpha } from '@mui/material/styles';

import { palette as themePalette } from 'src/theme/palette';

// ----------------------------------------------------------------------

export function presets(presetsColor: string) {
  const color = presetOptions.find((i) => i.name === presetsColor);

  const theme = {
    palette: {
      primary: color?.primary,
      secondary: color?.secondary,
    },
    customShadows: {
      primary: `0 8px 16px 0 ${alpha(`${color?.primary?.main}`, 0.24)}`,
      secondary: `0 8px 16px 0 ${alpha(`${color?.secondary?.main}`, 0.24)}`,
    },
  };

  return theme;
}

// ----------------------------------------------------------------------

const palette = themePalette('light');

export const presetOptions = [
  // DEFAULT
  {
    name: 'default',
    primary: { ...palette.primary },
    secondary: { ...palette.secondary },
  },

  // GREEN - BLUE
  {
    name: 'preset02',
    primary: {
      lighter: '#D0FCE0',
      light: '#72F2B9',
      main: '#1AD5A6',
      dark: '#0D9991',
      darker: '#045966',
      contrastText: palette.grey[800],
    },
    secondary: {
      lighter: '#D6E5FD',
      light: '#85A9F3',
      main: '#3562D7',
      dark: '#1A369A',
      darker: '#0A1967',
      contrastText: '#FFFFFF',
    },
  },

  // PINK - CYAN
  {
    name: 'preset01',
    primary: {
      lighter: '#FEE7E4',
      light: '#FBAEB5',
      main: '#F2779A',
      dark: '#AE3B72',
      darker: '#741655',
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#CAFDEB',
      light: '#61F4D9',
      main: '#00DCDA',
      dark: '#00849E',
      darker: '#004569',
      contrastText: '#FFFFFF',
    },
  },

  // PURPLE - TEAL
  {
    name: 'preset05',
    primary: {
      lighter: '#EACCFF',
      light: '#B566FF',
      main: '#6E00FF',
      dark: '#3F00B7',
      darker: '#1F007A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#CBFEFB',
      light: '#65F2FE',
      main: '#00C5FE',
      dark: '#0073B6',
      darker: '#003B79',
      contrastText: '#FFFFFF',
    },
  },

  // BLUE - ORANGE
  {
    name: 'preset03',
    primary: {
      lighter: '#CCF4FE',
      light: '#68CDF9',
      main: '#078DEE',
      dark: '#0351AB',
      darker: '#012972',
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#FFF3D8',
      light: '#FFD18B',
      main: '#FFA03F',
      dark: '#B75D1F',
      darker: '#7A2D0C',
      contrastText: palette.grey[800],
    },
  },

  // GREEN - ORANGE
  {
    name: 'preset04',
    primary: {
      lighter: '#DBF7EE',
      light: '#8BD0C7',
      main: '#2D6365',
      dark: '#163E48',
      darker: '#082130',
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#FEEFD5',
      light: '#FBC182',
      main: '#F37F31',
      dark: '#AE4318',
      darker: '#741B09',
      contrastText: '#FFFFFF',
    },
  },
];
