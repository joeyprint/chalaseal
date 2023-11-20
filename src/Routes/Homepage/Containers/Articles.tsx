import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} mt={8}>
      <Typography variant={'h5'}>Items</Typography>
      <Typography component={Link} to={'/browse'}>
        See More
      </Typography>
    </Box>
  );
};

export default Articles;
