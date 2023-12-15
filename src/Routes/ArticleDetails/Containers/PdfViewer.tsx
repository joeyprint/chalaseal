import { Alert, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

import { useItemDetails } from '../../../Domains/item';

const PdfViewer = () => {
  const { articleId = '' } = useParams();
  const { data, isLoading, isError } = useItemDetails(articleId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const articleFile = data?.data?.files;

  if (!articleFile || articleFile.length === 0) return null;

  return (
    <Box mt={4}>
      <Viewer
        fileUrl={articleFile[0].url}
        renderError={() => (
          <Alert severity={'error'}>Fail to fetch PDF file</Alert>
        )}
        httpHeaders={{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Access-Control-Allow-Headers': 'Origin, Content-Type',
        }}
        withCredentials={true}
      />
    </Box>
  );
};

export default PdfViewer;
