import { Box, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ArticleCard } from '../../../Components/ArticleCard';

const ArticleCollection = () => {
  const navigate = useNavigate();

  const goToCollectionById = (collectionId: string) => {
    navigate(`./collection/${collectionId}`, { replace: false });
  };

  return (
    <Box mt={4}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'baseline'}
      >
        <Typography variant={'h5'}>Article Collections</Typography>
        <Typography component={Link} to={'/articles/collection'}>
          See More
        </Typography>
      </Box>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            topic={
              'Registers in Mon, Kui (Suai) and Chong : An Acoustic Study Project'
            }
            buttonMessage={'Go to collection'}
            onButtonClick={() => goToCollectionById('1')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            topic={
              'Registers in Mon, Kui (Suai) and Chong : An Acoustic Study Project'
            }
            buttonMessage={'Go to collection'}
            onButtonClick={() => goToCollectionById('2')}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArticleCollection;
