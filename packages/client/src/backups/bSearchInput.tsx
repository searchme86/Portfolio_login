import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

function SearchInput(props: ISearchInputProps) {
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <div className="">
      <label htmlFor="search" className="mt-3">
        search! try
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="search"
        aria-label="search"
        onChange={(event) => {
          console.log('firing!!!');
          setQuery(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchInput;
