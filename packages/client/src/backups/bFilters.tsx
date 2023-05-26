import React from 'react';

export interface IFiltersProps<T> {
  object: T;
  properties: Array<keyof T>;
  onChangeFilter: (property: keyof T) => void;
}

function Filters<T extends {}>(props: IFiltersProps<T>) {
  const { object, properties, onChangeFilter } = props;
  return (
    <div className="p-1 my-2">
      <label htmlFor="" className="mt-3">
        Filters! Try us too!
      </label>
      {Object.keys(object).map((key) => {
        return (
          <>
            <input
              type="checkbox"
              id={key}
              value={key}
              onChange={() => onChangeFilter(key as any)}
              checked={properties.some((property) => property === key)}
              className="m-1 ml-3"
            />
            <label htmlFor={key}>`${key}` is truthy </label>
          </>
        );
      })}
    </div>
  );
}

export default Filters;
