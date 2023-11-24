import { Box, Typography } from '@mui/material';
import { Image } from '../../../Components/Base';

const AboutInfo = () => {
  return (
    <Box mt={3}>
      <Box display={'flex'} flexDirection={{ xs: 'column-reverse', md: 'row' }}>
        <Image
          src={'/assets/images/chula_art_location.jpeg'}
          maxWidth={{ md: 534 }}
          sx={{ objectFit: 'cover' }}
        />
        <Box mb={{ xs: 2, md: 0 }} ml={{ md: 2 }}>
          <Typography>
            Welcome to the Chulalongkorn Linguistic Fieldwork Archive (CLFA), a
            digital repository dedicated to field linguistics research. CLFA is
            the result of a collaborative effort between{' '}
            <Typography
              component={'a'}
              href={'https://www.arts.chula.ac.th/chulaseal/'}
              variant={'subtitle2'}
              color={'primary.main'}
              target={'_blank'}
            >
              the Center of Excellence in Southeast Asian Linguistics
              (ChulaSEAL)
            </Typography>{' '}
            and{' '}
            <Typography
              component={'a'}
              href={'https://www.arts.chula.ac.th/~hic/home/'}
              variant={'subtitle2'}
              color={'primary.main'}
              target={'_blank'}
            >
              the Humanities Information Center at the Faculty of Arts,
              Chulalongkorn University.
            </Typography>{' '}
            It serves as a permanent and secure online collection of linguistic
            data generated by members of the Chulalongkorn University
            linguistics community.
          </Typography>
          <Typography mt={2}>
            Our primary mission is to remove barriers that limit access to
            linguistic materials, thereby facilitating future research
            endeavors. In doing so, we align with the fundamental objective of
            field linguists: the preservation and celebration of global cultural
            and linguistic diversity. The decision to scan and digitize each
            document was made with the intention of preserving the original
            handwriting and nuances, ensuring the authenticity of the materials
            remains intact. CLFA is committed to offering comprehensive access
            to language data and documentation records from Southeast Asia, with
            a specific focus on highlighting the contributions of both past and
            current faculty members of the Department of Linguistics.
          </Typography>
        </Box>
      </Box>
      <Typography mt={2}>
        The cornerstone of our archive is the extensive collection amassed over
        a lifetime by Professor Theraphan Luangthongkum, a prominent figure in
        the field of Southeast Asian linguistics. While her expertise primarily
        centers on Kra-Dai and Austroasiatic languages, her work spans all five
        language families of Mainland Southeast Asia. Within CLFA, you will find
        a valuable array of data, including materials that have been previously
        published as part of her research projects, as well as notes from field
        method classes and various interactions with language consultants.
      </Typography>
      <Typography mt={2}>
        Welcome to CLFA, where we champion linguistic diversity, safeguard
        cultural heritage, and provide a gateway to a wealth of linguistic
        knowledge from Southeast Asia and beyond.
      </Typography>
    </Box>
  );
};

export default AboutInfo;
