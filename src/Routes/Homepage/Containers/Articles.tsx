import { Box, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import ArticleItem from '../Components/ArticleItem';

const Articles = () => {
  const navigate = useNavigate();

  const goToArticleById = (id: string) => {
    navigate(`/articles/${id}`);
  };

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant={'h5'}>Items</Typography>
        <Typography component={Link} to={'/browse'}>
          See More
        </Typography>
      </Box>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleItem
            topic={'Yao: Ban Huai Mae Sai Dialect'}
            description={
              'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai'
            }
            onReadMore={() => goToArticleById('1')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleItem
            topic={'Yao: Ban Huai Mae Sai Dialect'}
            description={
              'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai'
            }
            onReadMore={() => goToArticleById('2')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleItem
            topic={'Yao: Ban Huai Mae Sai Dialect'}
            description={
              'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai'
            }
            onReadMore={() => goToArticleById('3')}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Articles;
