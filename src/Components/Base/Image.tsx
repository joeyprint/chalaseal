import { Box, BoxProps, styled } from '@mui/material';

type ImageProps = BoxProps<'img'>;

const Image = styled(Box)<ImageProps>``;

Image.defaultProps = { component: 'img' };

export { Image };
export type { ImageProps };
