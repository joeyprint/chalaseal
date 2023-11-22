import { Box, BoxProps, Typography } from '@mui/material';

type InfoBoxProps = {
  title: string;
  description: string;
} & BoxProps;

const InfoBox = ({ title, description, ...restProps }: InfoBoxProps) => {
  return (
    <Box
      display={{ md: 'flex' }}
      alignItems={{ md: 'baseline' }}
      {...restProps}
    >
      <Typography fontWeight={600} minWidth={145}>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

const ArticleInformation = () => {
  return (
    <Box mt={8}>
      <InfoBox title={'Original Format'} description={'Notebook'} />
      <InfoBox
        title={'Source'}
        description={"Written text from Theeraphan Luangthongkum's notebook"}
        mt={2}
      />
      <InfoBox
        title={'Subject'}
        description={'Sino-Tibetan Languages'}
        mt={2}
      />
      <InfoBox title={'Language'} description={'tha, kdt'} mt={2} />
      <InfoBox
        title={'Research Date'}
        description={'1 July 1983 - 5 Aug 1983'}
        mt={2}
      />
      <InfoBox title={'Accrual Method'} description={'Donation'} mt={2} />
      <InfoBox
        title={'Citation'}
        description={
          'Theraphan Luangthongkum, “Kui: Ban Sang Kae Dialect,” Chulalongkorn Linguistic Fieldwork Archive , accessed November 19, 2023'
        }
        mt={2}
      />
      <InfoBox
        title={'Publisher'}
        description={
          'Humanities Information Center, Faculty of Arts, Chulalongkorn University'
        }
        mt={2}
      />
      <InfoBox
        title={'Right Holder'}
        description={
          'Humanities Information Center, Faculty of Arts, Chulalongkorn University'
        }
        mt={2}
      />
      <InfoBox
        title={'Copyright'}
        description={
          'In copyright. This material may be used for personal, educational, or non-commercial use when a statement of credit is used. For other uses, please contact the Department of Linguistics, Faculty of Arts, Chulalongkorn University at chulaseal@gmail.com'
        }
        mt={2}
      />
    </Box>
  );
};

export default ArticleInformation;
