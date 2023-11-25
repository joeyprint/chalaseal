import { Container, Typography } from '@mui/material';

import ContactInfo from './Containers/ContactInfo';

const ContactUs = () => {
  return (
    <Container>
      <Typography variant={'h4'}>Contact Us</Typography>
      <ContactInfo />
    </Container>
  );
};

export default ContactUs;
