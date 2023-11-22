import EastRoundedIcon from '@mui/icons-material/EastRounded';

import { Box, BoxProps, Button, Typography } from '@mui/material';

type ArticleItemProps = {
  topic: string;
  description: string;
  onReadMore?: () => void;
} & BoxProps;

const ArticleItem = (props: ArticleItemProps) => {
  const { topic, description, onReadMore, ...restProps } = props;

  return (
    <Box
      bgcolor={'common.white'}
      borderRadius={2}
      boxShadow={4}
      p={2}
      minHeight={195}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      {...restProps}
    >
      <Box>
        <Typography
          fontWeight={600}
          display={'-webkit-box'}
          textOverflow={'ellipsis'}
          overflow={'hidden'}
          sx={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {topic}
        </Typography>
        <Typography
          mt={1}
          color={'text.secondary'}
          display={'-webkit-box'}
          textOverflow={'ellipsis'}
          overflow={'hidden'}
          sx={{ WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
        >
          {description}
        </Typography>
      </Box>
      {onReadMore && (
        <Box>
          <Button
            endIcon={<EastRoundedIcon />}
            variant={'contained'}
            size={'large'}
            onClick={onReadMore}
          >
            Read More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ArticleItem;
