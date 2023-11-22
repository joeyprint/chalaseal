import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { Button, Container } from '@mui/material';

import ArticleBasicInformation from './Containers/ArticleBasicInformation';

const ArticleDetails = () => {
  return (
    <Container>
      <Button
        startIcon={<WestRoundedIcon />}
        size={'large'}
        variant={'outlined'}
      >
        Back
      </Button>
      <ArticleBasicInformation />
    </Container>
  );
};

export default ArticleDetails;
