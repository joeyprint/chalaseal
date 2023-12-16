import { createTheme } from '@mui/material';

const chipTheme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontSize: 24,
          lineHeight: 0.75,
        },
        labelMedium: {
          fontSize: 20,
          lineHeight: 0.75,
        },
        labelSmall: {
          fontSize: 18,
          lineHeight: 0.75,
        },
      },
    },
  },
});

export default chipTheme.components;
