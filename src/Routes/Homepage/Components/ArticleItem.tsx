import EastIcon from '@mui/icons-material/East';

import { Box, BoxProps, Button, Typography } from '@mui/material';

type ArticleItemProps = {
  topic: string;
  description: string;
} & BoxProps;

const ArticleItem = (props: ArticleItemProps) => {
  const { topic, description, onClick, ...restProps } = props;

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
          display={'-webkit-box'}
          textOverflow={'ellipsis'}
          overflow={'hidden'}
          sx={{ WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
        >
          {description}
        </Typography>
      </Box>
      {onClick && (
        <Box>
          <Button endIcon={<EastIcon />} variant={'contained'} size={'large'}>
            Read More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ArticleItem;
