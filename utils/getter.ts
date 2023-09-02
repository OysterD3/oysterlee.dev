import dayjs from 'dayjs';
import { BlogTagType } from '~/constants/blog';

export const getPublishedDate = (meta: HTMLMetaElement[]) => {
  const item = meta.find((v) => v.name === 'article:published_time')?.content;
  if (item) {
    return dayjs(item).format('DD MMM YYYY');
  }
  return null;
};

export const getBlogTags = (meta: HTMLMetaElement[]): BlogTagType[] => {
  const item = meta.find((v) => v.name === 'article:tag')?.content;
  if (item) {
    return item.split(', ') as BlogTagType[];
  }
  return [];
};
