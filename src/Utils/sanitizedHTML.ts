import DOMPurify from 'dompurify';

export const removeHrefOutOfATag = (htmlString: string) => {
  const sanitizedElement = DOMPurify.sanitize(htmlString, {
    RETURN_DOM: true,
  });

  if (sanitizedElement.querySelector('a') !== null) {
    sanitizedElement.querySelector('a')?.removeAttribute('href');
  }

  const modifiedHtmlString = sanitizedElement.outerHTML;

  return modifiedHtmlString;
};
