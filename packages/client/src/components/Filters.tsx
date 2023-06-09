import React, { useState } from 'react';
import IFilter from '../interfaces/IFilter';
import genericFilter from '../utils/genericFilter';
import PropsWithChildrenFunction from '../@types/PropsWithChildrenFuction';

export interface IFiltersProps<T> {
  dataSource: Array<T>;
}

function Filters<T extends {}>(
  props: PropsWithChildrenFunction<IFiltersProps<T>, T>
) {
  const { dataSource, children } = props;
  const [filterProperties, setFilterProperties] = useState<Array<IFilter<T>>>(
    []
  );
  const object = dataSource.length > 0 ? dataSource[0] : {};

  const onChangeFilter = (property: IFilter<T>) => {
    const propertyMatch = filterProperties.some(
      (filterProperty) => filterProperty.property === property.property
    );
    const fullMatch = filterProperties.some(
      (filterProperty) =>
        filterProperty.property === property.property &&
        filterProperty.isTruthySelected === property.isTruthySelected
    );
    if (fullMatch) {
      setFilterProperties(
        filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        )
      );
    } else if (propertyMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        ),
        property,
      ]);
    } else {
      setFilterProperties([...filterProperties, property]);
    }
  };

  return (
    <>
      <div className="">
        <label className="">Filters! Try us too!</label>
        <br />
        {Object.keys(object).map((key) => {
          return (
            <>
              <input
                type="checkbox"
                id={`${key}-true`}
                value={key}
                onChange={() =>
                  onChangeFilter({
                    property: key as any,
                    isTruthySelected: true,
                  })
                }
                checked={filterProperties.some(
                  (property) =>
                    property.property === key && property.isTruthySelected
                )}
                className=""
              />
              <label htmlFor={`${key}-true`}>'{key}' is truthy</label>
              <input
                type="checkbox"
                id={`${key}-false`}
                value={key}
                onChange={() =>
                  onChangeFilter({
                    property: key as any,
                    isTruthySelected: false,
                  })
                }
                checked={filterProperties.some(
                  (property) =>
                    property.property === key && !property.isTruthySelected
                )}
                className=""
              />
              <label htmlFor={`${key}-false`}>'{key}' is falsy</label>
              <br />
            </>
          );
        })}
      </div>
      {children &&
        dataSource
          .filter((widget) => genericFilter(widget, filterProperties))
          .map((widget) => children(widget))}
    </>
  );
}

export default Filters;
