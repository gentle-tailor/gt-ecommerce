export const escapeLinkPath = (() => {
  const reg = /([.+*?=^!:${}()[\]|/\\])/g;

  return (path: string) => (
    path.replace(reg, '\\$1')
  );
})();
