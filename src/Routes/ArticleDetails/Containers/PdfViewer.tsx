import { Alert, Box } from '@mui/material';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = () => {
  return (
    <Box mt={4}>
      <Viewer
        fileUrl='https://www.chulaseal.com/field/files/original/7c88c9edd786d567591f33fe5c023b71.pdf'
        renderError={() => (
          <Alert severity={'error'}>Fail to fetch PDF file</Alert>
        )}
      />
    </Box>
  );
};

export default PdfViewer;
