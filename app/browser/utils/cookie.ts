import {
  parse,
  serialize,
  CookieSerializeOptions
} from 'cookie';

/* ==== cookie controls ==== */
export const setCookieItem = (key: string, value: any, options?: CookieSerializeOptions) => {
  document.cookie = serialize(key, value, options);
};

export const getCookieItem = (key: string): string | undefined => (
  parse(document.cookie)[key]
);

export const deleteCookieItem = (key: string, options: CookieSerializeOptions = {}) => {
  const expireOption = { expires: new Date() };

  setCookieItem(key, '', {
    ...options,
    ...expireOption,
  });
};
