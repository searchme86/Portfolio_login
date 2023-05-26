import React, { useState, ReactNode } from 'react';
import ISorter from '../interfaces/ISorter';
import genericSort from '../utils/genericSort';

type PropsWithChildrenFunction<P, T> = P & {
  children?(item: T): ReactNode;
};
export interface ISortersProps<T> {
  dataSource: Array<T>;
  initialSortProperty: keyof T;
}

function Sorters<T extends {}>(
  props: PropsWithChildrenFunction<ISortersProps<T>, T>
) {
  const { dataSource, initialSortProperty, children } = props;

  const [sortProperty, setSortProperty] = useState<ISorter<T>>({
    property: initialSortProperty,
    isDescending: true,
  });

  const object = dataSource.length > 0 ? dataSource[0] : {};

  return (
    <div>
      <label htmlFor="sorters" className="">
        Sorters! Try us too!
      </label>
      <select
        id="sorters"
        className=""
        onChange={(event) => {
          const values = event.target.value.split('-');
          if (values.length === 2) {
            setSortProperty({
              property: values[0] as any,
              isDescending: values[1] === 'true',
            });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                sort by `{key}` descending
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                sort by `{key}` ascending
              </option>
            </>
          );
        })}
      </select>
      {children &&
        dataSource
          .sort((a, b) => genericSort(a, b, sortProperty))
          .map((widget) => children(widget))}
    </div>
  );
}

export default Sorters;
