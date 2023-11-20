import { createTheme } from '@mui/material';

const svgIconTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 24,
        },
        fontSizeSmall: {
          fontSize: 20,
        },
        fontSizeLarge: {
          fontSize: 32,
        },
      },
    },
  },
});

export default svgIconTheme.components;
