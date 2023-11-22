import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Worker } from '@react-pdf-viewer/core';

import { AppRoutes } from './Routes';
import { theme } from './Components/Theme';

function App() {
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </Worker>
  );
}

export default App;
