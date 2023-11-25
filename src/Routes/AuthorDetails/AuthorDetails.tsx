import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router';

import AuthorInformation from './Containers/AuthorInformation';
import ArticleCollection from './Containers/ArticleCollection';

const AuthorDetails = () => {
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
      <AuthorInformation />
      <ArticleCollection />
    </Container>
  );
};

export default AuthorDetails;
