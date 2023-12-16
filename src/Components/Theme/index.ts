import { createTheme } from '@mui/material';

import appBarTheme from './AppBarTheme';
import buttonTheme from './ButtonTheme';
import paletteTheme from './PaletteTheme';
import svgIconTheme from './SvgIconTheme';
import typographyTheme from './TypographyTheme';

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
    ...buttonTheme,
    ...svgIconTheme,
    ...typographyTheme.components,
  },
});

export { theme };
