export const setSessionStorageItem = (key: string, value: any) => {
  sessionStorage.setItem(key, value);
};

export const getSessionStorageItem = (key: string): string | null => (
  sessionStorage.getItem(key)
);

export const deleteSessionStorageItem = (key: string): void => {
  sessionStorage.removeItem(key);
};
