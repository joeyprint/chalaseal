import { createTheme } from '@mui/material';

const TypographyTheme = createTheme({
  typography: {
    fontFamily: [
      'Mulish',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    h1: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.42,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.42,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.42,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.46,
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'initial',
      lineHeight: 'initial',
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.42,
    },
    overline: {
      fontSize: '0.85rem',
    },
  },
});

export default TypographyTheme;
