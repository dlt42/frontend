export const createArray = <T>(length: number): T[] => [...Array<T>(length)];

export const getErrorMessage = (error: unknown) => {
  if (!error) {
    return '';
  }
  return error instanceof Error ? error.message : JSON.stringify(error);
};
