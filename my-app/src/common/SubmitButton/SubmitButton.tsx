import React from 'react';

type SearchBarProps = {
  buttonText: string;
  searchVal: string;
  handleSearch: (input: string) => void;
};

export const SubmitButton = (props: SearchBarProps): JSX.Element => {
  const { buttonText, searchVal, handleSearch } = props;
  return (
    <div>
      <button
        data-testid={`${buttonText}-button`}
        onClick={() => handleSearch(searchVal)}
      >
        {buttonText}
      </button>
    </div>
  );
};
