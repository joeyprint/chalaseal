import { Container, Typography } from '@mui/material';
import AboutInfo from './Containers/AboutInfo';

const About = () => {
  return (
    <Container>
      <Typography variant={'h4'}>About</Typography>
      <AboutInfo />
    </Container>
  );
};

export default About;
