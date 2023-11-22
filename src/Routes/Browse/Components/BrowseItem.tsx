import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { Box, BoxProps, Typography } from '@mui/material';

type BrowseItemProps = {
  title: string;
  description: string;
  location?: string;
  tags?: Array<string>;
} & BoxProps;

const BrowseItem = (props: BrowseItemProps) => {
  const { title, description, location, tags, ...restProps } = props;

  return (
    <Box {...restProps}>
      <Typography fontWeight={600} color={'primary.main'}>
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
          <Typography variant={'body2'}>{location}</Typography>
        </Box>
      )}
      {tags && tags.length > 0 && (
        <Box display={'flex'} alignItems={'center'} mt={0.5}>
          <LabelOutlinedIcon fontSize='small' sx={{ mr: 1.25 }} />
          <Typography variant={'body2'}>{tags?.join(', ')}</Typography>
        </Box>
      )}
    </Box>
  );
};

export type { BrowseItemProps };
export default BrowseItem;
