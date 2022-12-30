import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    themeBlack: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    themeWhite: {
      main: '#ffffff',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['Aileron', 'sans-serif'].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
