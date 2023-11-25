import { Box, Typography } from '@mui/material';
import { MapViewer } from '../../../Components/MapViewer';

const ContactInfo = () => {
  return (
    <Box mt={2} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }}>
      <Box>
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }}>
          <Typography fontWeight={600} minWidth={80}>
            Address
          </Typography>
          <Typography>
            Department of Linguistics, Faculty of Arts, Chulalongkorn University
            Phayathai Road, Pathumwan Bangkok, Thailand 10330
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          mt={2}
        >
          <Typography fontWeight={600} minWidth={80}>
            Phone
          </Typography>
          <Typography
            component={'a'}
            color={'text.primary'}
            sx={{ textDecoration: 'none' }}
            href={'tel:+6622184692'}
          >
            (+66) 22184692
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          mt={2}
        >
          <Typography fontWeight={600} minWidth={80}>
            Email
          </Typography>
          <Typography
            component={'a'}
            color={'text.primary'}
            sx={{ textDecoration: 'none' }}
            href={'mailto:chulaseal@gmail.com'}
          >
            chulaseal@gmail.com
          </Typography>
        </Box>
      </Box>
      <MapViewer
        latitude={13.740146546124917}
        longitude={100.53383641164754}
        popupMessage={'Faculty of Arts, Chulalongkorn University'}
        mt={{ xs: 2, md: 0 }}
        ml={{ md: 2 }}
      />
    </Box>
  );
};

export default ContactInfo;
