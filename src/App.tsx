import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Worker } from '@react-pdf-viewer/core';

import { AppRoutes } from './Routes';
import { theme } from './Components/Theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline />
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Worker>
  );
}

export default App;
