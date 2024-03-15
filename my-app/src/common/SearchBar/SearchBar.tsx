import React, { ChangeEventHandler } from 'react';

type SearchBarProps = {
  searchVal: string;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  handleClear: () => void;
};

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { searchVal, inputHandler, handleClear } = props;
  return (
    <div data-testid="search-section">
      <input
        data-testid="search-input"
        type="text"
        onChange={inputHandler}
        value={searchVal}
      />
      <button data-testid="search-clear-button" onClick={() => handleClear()}>
        Clear
      </button>
    </div>
  );
};
