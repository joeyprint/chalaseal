import { HTMLAttributes, useRef } from 'react';

import { styled, BoxProps, Box as BaseBox } from '@mui/material';
import DOMPurify from 'dompurify';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const isAllowedIframeSource = (srcAttribute: string | null) => !!srcAttribute;

DOMPurify.addHook('beforeSanitizeElements', (currentNode: Element) => {
  if (currentNode.tagName === 'IFRAME') {
    const srcAttribute = currentNode.getAttribute('src');
    if (isAllowedIframeSource(srcAttribute)) {
      return currentNode;
    }
    currentNode.remove();
  }
  return;
});

const Box = styled(BaseBox)(({ theme }) => ({
  p: {
    margin: theme.spacing(0),
    display: 'inline',
  },
}));

type HTMLViewProps = Omit<BoxProps, 'children'> &
  HTMLAttributes<HTMLDivElement> & {
    rawContent?: string;
    children?: string;
  };

const HTMLView = (props: HTMLViewProps) => {
  const { rawContent = '', children = '', ...restProps } = props;
  const ref = useRef<HTMLDivElement>(document.createElement('div'));
  const sanitized = DOMPurify.sanitize(rawContent || children, {
    ADD_TAGS: ['iframe'],
  });

  return (
    <Box
      dangerouslySetInnerHTML={{ __html: sanitized }}
      {...restProps}
      ref={ref}
    />
  );
};

export type { HTMLViewProps };
export { HTMLView };
