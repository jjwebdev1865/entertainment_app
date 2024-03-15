import React from 'react';

type SearchBarProps = {
  buttonText: string;
  searchVal: string;
  ratingVal: number;
  handleSearch: (input: string, ratingVal: number) => void;
};


export const SubmitButton = (props: SearchBarProps): JSX.Element => {
  const { buttonText, searchVal, ratingVal, handleSearch} = props;
  return (
    <div>
      <button
        data-testid={`${buttonText}-button`}
        onClick={() => handleSearch(searchVal, ratingVal)}
      >
        {buttonText}
      </button>
    </div>

  );
};