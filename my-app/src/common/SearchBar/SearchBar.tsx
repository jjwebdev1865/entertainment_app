import React, { ChangeEventHandler } from 'react';
import { Button } from '../Button';
import { SearchBarInput } from './SearchBar.styles';

type SearchBarProps = {
  searchVal: string;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  handleClear: () => void;
  placeholderText?: string
};

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { searchVal, inputHandler, handleClear, placeholderText = 'Search Movie' } = props;
  return (
    <SearchBarInput data-testid="search-section">
      <input
        data-testid="search-input"
        type="text"
        onChange={inputHandler}
        value={searchVal}
        placeholder={placeholderText}
      />
      <Button buttonText='X' handleClick={handleClear} />
    </SearchBarInput>
  );
};
