import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <Box>
      <AppBar>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Logo</Typography>
          <Box>
            <Typography>Articles</Typography>
          </Box>
        </Container>
      </AppBar>
      <Toolbar />
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
