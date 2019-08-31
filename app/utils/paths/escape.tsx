export const escapeLinkPath = ((reg: RegExp) => (
  (path: string) => (
    path.replace(reg, '\\$1')
  )
))(/([.+*?=^!:${}()[\]|/\\])/g);
