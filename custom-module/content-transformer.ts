// @ts-ignore
import { defineTransformer } from '@nuxt/content/transformers';
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const getRawBody = (body: ParsedContent['body']) => {
  let words = '';

  for (let i = 0; i < body.children.length; i++) {
    if (body.children[i].children) {
      words += getRawBody(body.children[i]);
    }
    if (body.children[i].value && body.children[i].type === 'text') {
      words += body.children[i].value;
    }
  }

  return words;
};

const calculateReadingTime = (wordCount: number) => {
  const WPM = 238;
  return Math.ceil(wordCount / WPM);
};

export default defineTransformer({
  name: 'content-transformer',
  extensions: ['.md'],
  transform(content: ParsedContent) {
    const rawBody = getRawBody(content.body);
    const wordCount = rawBody.split(/\s+/gm).length;
    return {
      ...content,
      rawBody,
      wordCount,
      readingTime: calculateReadingTime(wordCount),
    };
  },
});
