import { createTheme } from '@mui/material';

import chulaFontRegWOFF from './fonts/THSarabunChula-Regular.woff';
import chulaFontRegWOFF2 from './fonts/THSarabunChula-Regular.woff2';
import chulaFontRegTTF from './fonts/THSarabunChula-Regular.ttf';
import chulaFontBoldWOFF from './fonts/THSarabunChula-Bold.woff';
import chulaFontBoldWOFF2 from './fonts/THSarabunChula-Bold.woff2';
import chulaFontBoldTTF from './fonts/THSarabunChula-Bold.ttf';

const TypographyTheme = createTheme({
  typography: {
    fontFamily: [
      '"TH Sarabun Chula"',
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
      fontSize: 57,
      fontWeight: 600,
      lineHeight: 1,
    },
    h2: {
      fontSize: 50,
      fontWeight: 600,
      lineHeight: 1,
    },
    h3: {
      fontSize: 44,
      fontWeight: 600,
      lineHeight: 1,
    },
    h4: {
      fontSize: 38,
      fontWeight: 600,
      lineHeight: 1,
    },
    h5: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1,
    },
    body1: {
      fontSize: 24,
      lineHeight: 1,
    },
    body2: {
      fontSize: 20,
      lineHeight: 1,
    },
    button: {
      fontSize: 20,
      fontWeight: 600,
      textTransform: 'initial',
      lineHeight: 'initial',
    },
    caption: {
      fontSize: 19,
      lineHeight: 1,
    },
    overline: {
      fontSize: '0.85rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: '"TH Sarabun Chula"',
          fontDisplay: 'swap',
          fontStyle: 'normal',
          fontWeight: 400,
          src: `url('${chulaFontRegWOFF2}') format('woff2'), url('${chulaFontRegWOFF}') format('woff'), url(${chulaFontRegTTF}) format('truetype')`,
        },
        fallbacks: [
          {
            '@font-face': {
              fontFamily: '"TH Sarabun Chula"',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 600,
              src: `src: url('${chulaFontBoldWOFF2}') format('woff2'), url('${chulaFontBoldWOFF}') format('woff'), url(${chulaFontBoldTTF}) format('truetype')`,
            },
          },
        ],
      },
    },
  },
});

export default TypographyTheme;
