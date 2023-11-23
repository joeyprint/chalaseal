import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  Container,
  Toolbar,
} from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { Image } from '../Base';

type MenuListProps = {
  menuUrl: string;
  menu: string;
} & ButtonProps;

const MenuList = ({ menu, menuUrl, ...restProps }: MenuListProps) => {
  return (
    <Button variant={'text'} component={Link} to={menuUrl} {...restProps}>
      {menu}
    </Button>
  );
};

const BaseLayout = () => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/');
  };

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
            onClick={handleGoToHomePage}
            sx={{ cursor: 'pointer' }}
          />
          <Box display={'flex'}>
            <MenuList menu='Browse' menuUrl='/browse' />
            <MenuList menu='About' menuUrl='/about' pl={2} />
            <MenuList menu='Contact Us' menuUrl='/contact-us' pl={2} />
          </Box>
        </Container>
      </AppBar>
      <Toolbar />
      <Box py={8}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default BaseLayout;
