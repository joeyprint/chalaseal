import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography>This is a Homepage</Typography>
      <Button onClick={() => navigate('/articles')}>Go to Article</Button>
    </Box>
  );
};

export default Homepage;
