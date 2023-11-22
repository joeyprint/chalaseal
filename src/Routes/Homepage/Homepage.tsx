import { Container } from '@mui/material';

import Articles from './Containers/Articles';
import Authors from './Containers/Authors';

const Homepage = () => {
  return (
    <Container>
      <Articles />
      <Authors />
    </Container>
  );
};

export default Homepage;
