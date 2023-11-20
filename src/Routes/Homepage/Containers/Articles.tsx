import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import ArticleItem from '../Components/ArticleItem';

const Articles = () => {
  const navigate = useNavigate();

  const goToArticleById = (id: string) => {
    navigate(`/articles/${id}`);
  };

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} mt={8}>
        <Typography variant={'h5'}>Items</Typography>
        <Typography component={Link} to={'/browse'}>
          See More
        </Typography>
      </Box>
      <Box>
        <ArticleItem
          topic={'Yao: Ban Huai Mae Sai Dialect'}
          description={
            'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai'
          }
          onClick={() => goToArticleById('1')}
        />
      </Box>
    </>
  );
};

export default Articles;