import { Container, Typography } from '@mui/material';

import AboutInfo from './Containers/AboutInfo';
import AcknowledgeInfo from './Containers/AcknowledgeInfo';

const About = () => {
  return (
    <Container>
      <Typography variant={'h4'}>About</Typography>
      <AboutInfo />
      <Typography variant={'h4'} mt={6}>
        Acknowledgements
      </Typography>
      <AcknowledgeInfo />
    </Container>
  );
};

export default About;
