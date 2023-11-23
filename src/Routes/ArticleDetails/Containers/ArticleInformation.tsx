import { Box, BoxProps, Typography } from '@mui/material';
import { MapViewer } from '../../../Components/MapViewer';

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

const mockInfo = {
  id: '1',
  title: 'Kui: Ban Sang Kae Dialect',
  originFormat: 'Notebook',
  originSource: "Written text from Theeraphan Luangthongkum's notebook",
  subject: 'Sino-Tibetan Languages',
  languages: ['tha', 'kdt'],
  researchDate: '1 July 1983 - 5 Aug 1983',
  location: 'Surin (Thailand)',
  accrual: 'Donation',
  author: 'Theraphan Luangthongkum',
  publisher:
    'Humanities Information Center, Faculty of Arts, Chulalongkorn University',
  rightHolder:
    'Humanities Information Center, Faculty of Arts, Chulalongkorn University',
  tags: ['Ahka', 'Ekaw', 'Sino-Tibetan Languages'],
};

const ArticleInformation = () => {
  return (
    <Box mt={8}>
      <InfoBox title={'Original Format'} description={mockInfo.originFormat} />
      <InfoBox title={'Source'} description={mockInfo.originSource} mt={2} />
      <InfoBox title={'Subject'} description={mockInfo.subject} mt={2} />
      <InfoBox
        title={'Language'}
        description={mockInfo.languages.join(', ')}
        mt={2}
      />
      <InfoBox
        title={'Research Date'}
        description={mockInfo.researchDate}
        mt={2}
      />
      <Box display={{ md: 'flex' }} alignItems={{ md: 'baseline' }} mt={2}>
        <Typography fontWeight={600} minWidth={145}>
          Location
        </Typography>
        <Box width={1}>
          <Typography>{mockInfo.location}</Typography>
          <MapViewer
            latitude={13.756331}
            longitude={100.501762}
            popupMessage={mockInfo.title}
            mt={2}
          />
        </Box>
      </Box>
      <InfoBox title={'Accrual Method'} description={mockInfo.accrual} mt={2} />
      <InfoBox
        title={'Citation'}
        description={`
        ${mockInfo.author}, ${mockInfo.title}, ${new Intl.DateTimeFormat('en', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(new Date())}
        `}
        mt={2}
      />
      <InfoBox title={'Publisher'} description={mockInfo.publisher} mt={2} />
      <InfoBox
        title={'Right Holder'}
        description={mockInfo.rightHolder}
        mt={2}
      />
      <InfoBox
        title={'Copyright'}
        description={
          'In copyright. This material may be used for personal, educational, or non-commercial use when a statement of credit is used. For other uses, please contact the Department of Linguistics, Faculty of Arts, Chulalongkorn University at chulaseal@gmail.com'
        }
        mt={2}
      />
      <Box display={{ md: 'flex' }} alignItems={{ md: 'baseline' }} mt={2}>
        <Typography fontWeight={600} minWidth={145}>
          Tags
        </Typography>
        <Box>
          {/* Tags */}
          <Typography>{mockInfo.tags.join(', ')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleInformation;
