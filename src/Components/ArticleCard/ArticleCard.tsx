import EastRoundedIcon from '@mui/icons-material/EastRounded';

import { Box, BoxProps, Button, Typography } from '@mui/material';

type ArticleCardProps = {
  topic: string;
  description?: string;
  buttonMessage?: string;
  onButtonClick?: () => void;
} & BoxProps;

const ArticleCard = (props: ArticleCardProps) => {
  const {
    topic,
    description,
    onButtonClick,
    buttonMessage = 'Read More',
    ...restProps
  } = props;

  return (
    <Box
      bgcolor={'common.white'}
      borderRadius={2}
      boxShadow={4}
      p={2}
      flex={1}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={'100%'}
      {...restProps}
    >
      <Box height={'100%'}>
        <Typography
          fontWeight={600}
          display={'-webkit-box'}
          textOverflow={'ellipsis'}
          overflow={'hidden'}
          sx={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {topic}
        </Typography>
        {description && (
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
        )}
      </Box>
      {onButtonClick && (
        <Box mt={2}>
          <Button
            endIcon={<EastRoundedIcon />}
            variant={'contained'}
            size={'large'}
            onClick={onButtonClick}
          >
            {buttonMessage}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ArticleCard;
