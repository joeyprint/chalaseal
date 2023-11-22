import { Box, BoxProps, Typography } from '@mui/material';

type AuthorItemProps = {
  name: string;
  description: string;
} & BoxProps;

const AuthorItem = (props: AuthorItemProps) => {
  const { name, description, ...restProps } = props;

  return (
    <Box
      bgcolor={'common.white'}
      borderRadius={2}
      boxShadow={4}
      p={2}
      {...restProps}
    >
      <Typography fontWeight={600}>{name}</Typography>
      <Typography
        mt={1}
        color={'text.secondary'}
        display={'-webkit-box'}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        sx={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default AuthorItem;
