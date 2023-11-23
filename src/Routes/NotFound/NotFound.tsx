import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Typography variant={'subtitle1'}>404 | Page Not Found</Typography>
      <Button sx={{ mt: 2 }} onClick={handleBackToHome}>
        Back to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
