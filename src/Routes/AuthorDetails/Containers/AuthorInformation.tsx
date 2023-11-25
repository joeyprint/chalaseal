import { Box, Typography } from '@mui/material';

const AuthorInformation = () => {
  return (
    <Box mt={2.5}>
      <Typography variant={'h4'}>Theraphan Luangthongkum</Typography>
      <Typography>
        Humanities Information Center, Faculty of Arts, Chulalongkorn University
      </Typography>

      <Typography variant={'h5'} mt={4}>
        Description
      </Typography>
      <Typography mt={0.5}>
        Contains materials collected by Theraphan Luangthongkum through out her
        research career. An internationally recognized researcher, she fostered
        a strong fieldwork tradition at Chula and in Thailand. The content of
        this comprehensive collection encompasses a diverse range of languages
        hailing from various language families, including but not limited to
        Kra-Dai, Austroasiatic, Hmong-Mien, Sino-Tibetan, and Austronesian.
      </Typography>
    </Box>
  );
};

export default AuthorInformation;
