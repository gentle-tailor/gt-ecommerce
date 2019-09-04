export const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key: string): string | null => (
  localStorage.getItem(key)
);

export const deleteLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};
