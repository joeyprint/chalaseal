import { createTheme } from '@mui/material';

const paletteTheme = createTheme({
  palette: {
    primary: {
      light: 'hsla(266, 41%, 40%, 1)',
      main: 'hsla(266, 41%, 28%, 1)',
      dark: 'hsla(266, 41%, 20%, 1)',
    },
    error: {
      dark: 'hsla(360, 77%, 40%, 1)',
      main: 'hsla(360, 77%, 48%, 1)',
      light: 'hsla(360, 77%, 90%, 1)',
      contrastText: 'hsla(0, 0%, 100%, 1)',
    },
    warning: {
      dark: 'hsla(39, 100%, 40%, 1)',
      main: 'hsla(39, 100%, 48%, 1)',
      light: 'hsla(39, 100%, 90%, 1)',
      contrastText: 'hsla(0, 0%, 100%, 1)',
    },
    info: {
      dark: 'hsla(207, 86%, 40%, 1)',
      main: 'hsla(207, 86%, 48%, 1)',
      light: 'hsla(207, 100%, 90%, 1)',
      contrastText: 'hsla(0, 0%, 100%, 1)',
    },
    success: {
      dark: 'hsla(131, 53%, 40%, 1)',
      main: 'hsla(131, 53%, 48%, 1)',
      light: 'hsla(131, 53%, 90%, 1)',
      contrastText: 'hsla(0, 0%, 100%, 1)',
    },
    grey: {
      50: 'hsla(0, 0%, 94%, 1)',
      100: 'hsla(0, 0%, 85%, 1)',
      200: 'hsla(0, 0%, 75%, 1)',
      300: 'hsla(0, 0%, 65%, 1)',
      400: 'hsla(0, 0%, 55%, 1)',
      500: 'hsla(0, 0%, 40%, 1)',
      600: 'hsla(0, 0%, 30%, 1)',
      700: 'hsla(0, 0%, 25%, 1)',
      800: 'hsla(0, 0%, 19%, 1)',
      900: 'hsla(0, 0%, 10%, 1)',
    },
    text: {
      primary: 'hsla(0, 0%, 19%, 1)',
      secondary: 'hsla(0, 0%, 30%, 1)',
      disabled: 'hsla(210, 11%, 71%, 1)',
    },
  },
});

export default paletteTheme.palette;
