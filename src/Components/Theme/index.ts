import { createTheme } from '@mui/material';

import paletteTheme from './PaletteTheme';
import appBarTheme from './AppBarTheme';

const theme = () => {
  const defaultTheme = createTheme();

  return {
    ...defaultTheme,
    ...paletteTheme,
    components: {
      ...defaultTheme.components,
      ...appBarTheme,
    },
  };
};

export { theme };
