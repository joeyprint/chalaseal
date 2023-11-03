import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './Components/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
