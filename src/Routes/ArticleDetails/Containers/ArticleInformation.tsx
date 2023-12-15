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
  const location = article?.location;

  return (
    <Box mt={8}>
      <InfoBox title={'Original Format'} description={article.originalFormat} />
      <InfoBox title={'Source'} description={article.source} mt={2} />
      <InfoBox title={'Subject'} description={article.subjects[0]} mt={2} />
      <InfoBox
        title={'Language'}
        description={article.languages.join(', ')}
        mt={2}
      />
      {article.researchDate && (
        <InfoBox
          title={'Research Date'}
          description={article.researchDate}
          mt={2}
        />
      )}
      {location && (
        <Box display={{ md: 'flex' }} alignItems={{ md: 'baseline' }} mt={2}>
          <Typography fontWeight={600} minWidth={145}>
            Location
          </Typography>
          <Box width={1}>
            <Typography>{location.name}</Typography>
            <MapViewer
              latitude={location.latitude}
              longitude={location.longitude}
              zoom={location.zoomLevel}
              popupMessage={article.title}
              mt={2}
            />
          </Box>
        </Box>
      )}
      <InfoBox
        title={'Accrual Method'}
        description={article.accrualMethod}
        mt={2}
      />
      <InfoBox
        title={'Citation'}
        description={`
        ${article.creator}, ${article.title}, ${new Intl.DateTimeFormat('en', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(new Date())}
        `}
        mt={2}
      />
      <InfoBox title={'Publisher'} description={article.publisher} mt={2} />
      <InfoBox
        title={'Right Holder'}
        description={article.rightHolder}
        mt={2}
      />
      <InfoBox title={'Copyright'} description={article.rights} mt={2} />
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
