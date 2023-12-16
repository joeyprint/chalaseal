import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { Box, BoxProps, Chip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type BrowseItemProps = {
  title: string;
  description: string;
  articleUrl: string;
  location?: { name: string };
  tags?: Array<{ id: number; name: string }>;
} & BoxProps;

const BrowseItem = (props: BrowseItemProps) => {
  const { title, description, location, tags, articleUrl, ...restProps } =
    props;

  return (
    <Box {...restProps}>
      <Typography
        component={Link}
        fontWeight={600}
        variant={'subtitle1'}
        color={'primary.main'}
        sx={{ textDecoration: 'none' }}
        to={articleUrl}
      >
        {title}
      </Typography>
      <Typography
        mt={0.5}
        color={'text.secondary'}
        display={'-webkit-box'}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        sx={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
      >
        {description}
      </Typography>
      {location && (
        <Box display={'flex'} alignItems={'center'} mt={0.5}>
          <PlaceOutlinedIcon fontSize='small' sx={{ mr: 1.25 }} />
          <Typography variant={'body2'}>{location.name}</Typography>
        </Box>
      )}
      {tags && tags.length > 0 && (
        <Box display={'flex'} alignItems={'center'} mt={0.5}>
          <LabelOutlinedIcon fontSize='small' sx={{ mr: 1.25 }} />
          {tags.map((tag, index: number) => (
            <Chip
              label={tag.name}
              color={'primary'}
              size={'small'}
              variant={'outlined'}
              sx={{ ml: index === 0 ? 0 : 1 }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export type { BrowseItemProps };
export default BrowseItem;
