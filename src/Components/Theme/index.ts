import { createTheme } from '@mui/material';

import paletteTheme from './PaletteTheme';
import typographyTheme from './TypographyTheme';
import appBarTheme from './AppBarTheme';

const defaultTheme = createTheme();
defaultTheme.shadows[4] = '0px 4px 10px 0px rgba(0, 0, 0, 0.25)';

const theme = createTheme({
  palette: paletteTheme,
  typography: typographyTheme.typography,
  shape: {
    borderRadius: 8,
  },
  shadows: defaultTheme.shadows,
  components: {
    ...appBarTheme,
    ...typographyTheme.components,
  },
});

export { theme };
