import { createTheme } from '@mui/material';

const appBarTheme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme: { palette, spacing, shadows } }) => ({
          backgroundColor: palette.common.white,
          color: palette.text.primary,
          paddingTop: spacing(1),
          paddingBottom: spacing(1),
          boxShadow: shadows[3],
        }),
      },
    },
  },
});

export default appBarTheme.components;
