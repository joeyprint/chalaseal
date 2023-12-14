import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { useItemDetails } from '../../../Domains/item';

const ArticleBasicInformation = () => {
  const { articleId = '' } = useParams();
  const { data, isLoading, isError } = useItemDetails(articleId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const article = data?.data ?? {};

  return (
    <Box mt={2.5}>
      <Typography variant={'h4'}>{article.title}</Typography>
      <Typography mt={0.5}>{article.description}</Typography>
      <Box display={'flex'} alignItems={'center'} mt={1.5}>
        <PersonOutlineOutlinedIcon fontSize={'small'} sx={{ mr: 1.25 }} />
        <Typography variant={'body2'}>{article.creator}</Typography>
      </Box>
    </Box>
  );
};

export default ArticleBasicInformation;
