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
      {...restProps}
    >
      <Typography fontWeight={600}>{topic}</Typography>
      <Typography mt={1}>{description}</Typography>
      {onClick && (
        <Button endIcon={<EastIcon />} variant={'contained'}>
          Read More
        </Button>
      )}
    </Box>
  );
};

export default ArticleItem;
