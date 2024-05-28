import React, { ChangeEventHandler } from 'react';

type SearchBarProps = {
  searchVal: string;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { searchVal, inputHandler } = props;
  return (
    <input
      data-testid="search-input"
      type="text"
      onChange={inputHandler}
      value={searchVal}
    />
  );
};
