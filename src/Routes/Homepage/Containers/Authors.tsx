import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

import AuthorItem from '../Components/AuthorItem';

const Authors = () => {
  // const navigate = useNavigate();

  // const goToAuthorById = (id: string) => {
  //   navigate(`/authors/${id}`);
  // };

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} mt={6}>
        <Typography variant={'h5'}>Authors</Typography>
        <Typography component={Link} to={'/authors'}>
          See More
        </Typography>
      </Box>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <AuthorItem
            name={'Theraphan Luangthongkum'}
            description={
              'Humanities Information Center, Faculty of Arts, Chulalongkorn University'
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AuthorItem
            name={'Wasin Wachirapusitanun'}
            description={
              'Humanities Information Center, Faculty of Arts, Chulalongkorn University'
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AuthorItem
            name={'Leelee Surname'}
            description={
              'Humanities Information Center, Faculty of Arts, Chulalongkorn University'
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Authors;
