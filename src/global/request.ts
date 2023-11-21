export const getQueryString = <T extends object>(request: T) => {
  const query: string[] = [];
  const keys = Object.keys(request) as (keyof typeof request)[];
  keys.forEach((key) => {
    if (request[key]) {
      query.push(`${String(key)}=${request[key]}`);
    }
  });
  const queryString = query.length ? `?${query.join('&')}` : '';
  return queryString;
};
