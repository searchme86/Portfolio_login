import IFilter from '../interfaces/IFilter';

export default function genericFilter<T>(
  object: T,
  filterProperties: Array<IFilter<T>>
): boolean {
  //will only return true if all of the filter properties we've selected match that property
  //it only return true if every filter property that's selected is true
  return filterProperties.every((filterProperty) => {
    const { property, isTruthySelected } = filterProperty;
    return isTruthySelected ? object[property] : !object[property];
  });
}
