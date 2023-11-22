import { Box, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const mockUpArticleInformation = {
  title: 'Kui: Ban Sang Kae Dialect',
  description:
    'A list of words, phrases, and sentences of Kui in Ban Sangkae, with approximately 600 words written in phonetic alphabet, and their Thai translations are written with pencil',
  author: 'Theraphan Luangthongkum',
};

const ArticleBasicInformation = () => {
  const { title, description, author } = mockUpArticleInformation;
  return (
    <Box mt={2.5}>
      <Typography variant={'h4'}>{title}</Typography>
      <Typography mt={0.5}>{description}</Typography>
      <Box display={'flex'} alignItems={'center'} mt={1.5}>
        <PersonOutlineOutlinedIcon fontSize={'small'} sx={{ mr: 1.25 }} />
        <Typography variant={'body2'}>{author}</Typography>
      </Box>
    </Box>
  );
};

export default ArticleBasicInformation;
