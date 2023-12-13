import { Box, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { ArticleCard } from '../../../Components/ArticleCard';
import { useFeaturedItems } from '../../../Domains/features';

const FeatureArticles = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useFeaturedItems();

  const goToArticleById = (id: string | number) => {
    navigate(`/articles/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const featureds = (data?.data ?? []) as Array<Record<string, unknown>>;
  const thirdFeatures = featureds.slice(0, 3);

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'baseline'}
      >
        <Typography variant={'h5'}>Items</Typography>
        {featureds.length > 3 && (
          <Typography component={Link} to={'/browse'}>
            See More
          </Typography>
        )}
      </Box>
      <Grid container spacing={2} mt={1}>
        {thirdFeatures.map((feature: Record<string, unknown>) => {
          const id = feature.id as number;
          const title = feature.title as string;
          const description = feature.description as string;

          return (
            <Grid key={id} item xs={12} sm={6} md={4}>
              <ArticleCard
                topic={title}
                description={description}
                onButtonClick={() => goToArticleById(id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FeatureArticles;
