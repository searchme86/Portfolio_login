import React from 'react';
import IProperty from '../interfaces/IProperty';

export interface ISortersProps<T> {
  object: T;
  setProperty: (propertyType: IProperty<T>) => void;
}

function Sorters<T extends {}>(props: ISortersProps<T>) {
  const { object, setProperty } = props;

  return (
    <div>
      <label htmlFor="sorters" className="mt-3">
        Sorters! Try us too!
      </label>
      <select
        id="sorters"
        className="custom-select"
        onChange={(event) => {
          const values = event.target.value.split('-');
          if (values.length === 2) {
            setProperty({
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
    </div>
  );
}

export default Sorters;
