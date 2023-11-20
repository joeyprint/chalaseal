import { createTheme } from '@mui/material';

const appBarTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme: { palette, spacing, shadows } }) => ({
          backgroundColor: palette.common.white,
          color: palette.text.primary,
          paddingTop: spacing(2),
          paddingBottom: spacing(2),
          boxShadow: shadows[3],
        }),
      },
    },
  },
});

export default appBarTheme.components;
