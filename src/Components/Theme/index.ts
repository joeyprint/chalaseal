import { createTheme } from '@mui/material';

import paletteTheme from './PaletteTheme';
import typographyTheme from './TypographyTheme';
import appBarTheme from './AppBarTheme';

const theme = () => {
  const defaultTheme = createTheme();

  return {
    ...defaultTheme,
    ...paletteTheme,
    ...typographyTheme,
    components: {
      ...defaultTheme.components,
      ...appBarTheme,
    },
  };
};

export { theme };
