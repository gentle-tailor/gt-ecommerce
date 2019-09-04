import { getSessionStorageItem, setSessionStorageItem } from 'browser/utils/sessionStorage';

const formatKey = (key: string) => (
  `__SCROLL_${key}__`
);

export const readScroll = (key: string) => (
  getSessionStorageItem(formatKey(key))
);

export const writeScroll = (key: string, scroll: number) => {
  setSessionStorageItem(formatKey(key), scroll);
};
