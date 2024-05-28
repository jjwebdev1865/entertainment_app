import React, { ChangeEventHandler } from 'react';
import { Button } from '../Button';
import { SearchBarInput } from './SearchBar.styles';

type SearchBarProps = {
  searchVal: string;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  handleClear: () => void;
};

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { searchVal, inputHandler, handleClear } = props;
  return (
    <SearchBarInput data-testid="search-section">
      <input
        data-testid="search-input"
        type="text"
        onChange={inputHandler}
        value={searchVal}
        placeholder='Search Movie'
      />
      <Button buttonText='X' handleClick={handleClear} />
    </SearchBarInput>
  );
};
