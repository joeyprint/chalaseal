import { Box, BoxProps, Chip, Typography } from '@mui/material';
import { MapViewer } from '../../../Components/MapViewer';
import { useParams } from 'react-router-dom';
import { useItemDetails } from '../../../Domains/item';

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
  rightHolder:
    'Humanities Information Center, Faculty of Arts, Chulalongkorn University',
  tags: ['Ahka', 'Ekaw', 'Sino-Tibetan Languages'],
};

const ArticleInformation = () => {
  const { articleId = '' } = useParams();
  const { data, isLoading, isError } = useItemDetails(articleId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const article = data?.data;
  const collection = article.collection;

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
      <InfoBox title={'Publisher'} description={collection.publisher} mt={2} />
      <InfoBox
        title={'Right Holder'}
        description={mockInfo.rightHolder}
        mt={2}
      />
      <InfoBox title={'Copyright'} description={collection.rights} mt={2} />
      <Box display={{ md: 'flex' }} alignItems={{ md: 'baseline' }} mt={2}>
        <Typography fontWeight={600} minWidth={145}>
          Tags
        </Typography>
        <Box>
          {article.tags.map((tag: Record<string, unknown>, index: number) => {
            const id = tag.id as number;
            const name = tag.name as string;

            return (
              <Chip
                key={id}
                label={name}
                color={'primary'}
                variant={'outlined'}
                sx={{ ml: index === 0 ? 0 : 1 }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleInformation;
