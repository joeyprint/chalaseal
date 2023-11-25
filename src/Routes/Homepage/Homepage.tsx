import { Container } from '@mui/material';

import FeatureArticles from './Containers/FeatureArticles';
import FeatureAuthors from './Containers/FeatureAuthors';

const Homepage = () => {
  return (
    <Container>
      <FeatureArticles />
      <FeatureAuthors />
    </Container>
  );
};

export default Homepage;
