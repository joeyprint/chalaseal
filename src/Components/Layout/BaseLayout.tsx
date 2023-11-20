import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Image } from '../Base';

const BaseLayout = () => {
  return (
    <Box>
      <AppBar>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image
            src={'/assets/images/chula-seal-logo.svg'}
            alt={'Chula SEAL Logo'}
            maxHeight={48}
          />
          <Box display={'flex'}>
            <Typography>Browse</Typography>
            <Typography pl={2}>About</Typography>
            <Typography pl={2}>Contact Us</Typography>
          </Box>
        </Container>
      </AppBar>
      <Toolbar />
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
