export default function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
): boolean {
  // if query is empty, search anything
  if (query === ' ') {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];
    if (typeof value === 'string' || typeof value === 'number') {
      if (shouldBeCaseSensitive) {
        return value.toString().includes(query);
      } else {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      }
    }

    //default case
    //if value is function or something,
    return false;
  });
}
