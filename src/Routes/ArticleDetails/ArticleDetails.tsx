import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ArticleBasicInformation from './Containers/ArticleBasicInformation';
import PdfViewer from './Containers/PdfViewer';

const ArticleDetails = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        startIcon={<WestRoundedIcon />}
        size={'large'}
        variant={'outlined'}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <ArticleBasicInformation />
      <PdfViewer />
    </Container>
  );
};

export default ArticleDetails;
