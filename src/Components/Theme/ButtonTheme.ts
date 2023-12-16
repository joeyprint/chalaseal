import { createTheme } from '@mui/material';

const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontSize: 24,
          lineHeight: 0.5,
        },
        sizeMedium: {
          fontSize: 20,
          lineHeight: 0.5,
        },
      },
    },
  },
});

export default buttonTheme.components;
