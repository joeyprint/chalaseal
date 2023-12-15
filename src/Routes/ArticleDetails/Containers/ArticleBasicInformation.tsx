import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { useItemDetails } from '../../../Domains/item';
import { removeHrefOutOfATag } from '../../../Utils/sanitizedHTML';
import { HTMLView } from '../../../Components/HTMLView';

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
  const creator = removeHrefOutOfATag(article.creator);

  return (
    <Box mt={2.5}>
      <Typography variant={'h4'}>{article.title}</Typography>
      <Typography mt={0.5}>{article.description}</Typography>
      <Box display={'flex'} alignItems={'center'} mt={1.5}>
        <PersonOutlineOutlinedIcon fontSize={'small'} sx={{ mr: 1.25 }} />
        <HTMLView variant={'body2'}>{creator}</HTMLView>
      </Box>
    </Box>
  );
};

export default ArticleBasicInformation;
