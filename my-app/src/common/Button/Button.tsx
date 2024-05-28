import React from 'react';

type ButtonProps = {
  buttonText: string;
  searchVal: string;
  handleSearch: (input: string) => void;
};

export const Button = (props: ButtonProps): JSX.Element => {
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
