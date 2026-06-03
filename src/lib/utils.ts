export const cn = (...classes: Array<string | undefined | null | false>) => {
  return classes.filter(Boolean).join(' ');
};

export const formatProjectYear = (year: number) => `${year}`;
