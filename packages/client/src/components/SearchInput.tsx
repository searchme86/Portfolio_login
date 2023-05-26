import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import PropsWithChildrenFunction from '../@types/PropsWithChildrenFuction';
import genericSearch from '../backups/bgenericSearch';

export interface ISearchInputProps<T> {
  dataSource: Array<T>;
  searchKeys: Array<keyof T>;
}

function SearchInput<T>(
  props: PropsWithChildrenFunction<ISearchInputProps<T>, T>
) {
  const { searchKeys, dataSource, children } = props;
  const [query, setQuery] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <>
      <label htmlFor="search" className="">
        Search! Try me!
      </label>
      <input
        id="search"
        className=""
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => {
          console.log('인풋에 텍스트가 입력중입니다.');
          setQuery(event.target.value);
        }}
      />
      {children &&
        dataSource
          .filter((person) =>
            genericSearch(person, searchKeys, searchQuery, false)
          )
          .map((widget) => children(widget))}
    </>
  );
}

export default SearchInput;
