import { Box, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { ArticleCard } from '../../../Components/ArticleCard';

const ArticlesByAuthor = () => {
  const navigate = useNavigate();

  const goToArticleById = (id: string) => {
    navigate(`/articles/${id}`);
  };

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'baseline'}
        mt={6}
      >
        <Typography variant={'h5'}>Items</Typography>
        <Typography component={Link} to={'/browse'}>
          See More
        </Typography>
      </Box>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            topic={'Kayan Karen, Kayah, and Kayaw: Ban Huai Suea Thao Dialect'}
            description={
              'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai'
            }
            onButtonClick={() => goToArticleById('1')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            topic={'Yao: Ban Huai Mae Sai Dialect'}
            description={
              'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words.'
            }
            onButtonClick={() => goToArticleById('2')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} height={'auto'}>
          <ArticleCard
            topic={'Yao: Ban Huai Mae Sai Dialect'}
            description={'Interviews of Yao people'}
            onButtonClick={() => goToArticleById('3')}
            height={'100%'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            topic={
              "Pwo Karen: Ban Dong Dam Dialect, S'gaw Karen: Ban Pa La-U Dialect"
            }
            description={
              'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai'
            }
            onButtonClick={() => goToArticleById('1')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            topic={'Kayan Karen, Kayah, and Kayaw: Ban Huai Suea Thao Dialect'}
            description={
              'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words.'
            }
            onButtonClick={() => goToArticleById('2')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} height={'auto'}>
          <ArticleCard
            topic={'Yao: Ban Huai Mae Sai Dialect'}
            description={'Interviews of Yao people'}
            onButtonClick={() => goToArticleById('3')}
            height={'100%'}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ArticlesByAuthor;
