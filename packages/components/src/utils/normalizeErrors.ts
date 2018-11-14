export interface Error {
  path: string;
  message: string;
}

export const normalizeErros = (errors: Error[]) => {
  const errMap: { [key: string]: string } = {};

  errors.forEach(err => {
    errMap[err.path] = err.message;
  });

  return errMap;
};
