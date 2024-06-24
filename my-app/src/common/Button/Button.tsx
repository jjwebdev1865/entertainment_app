import React from 'react';

type ButtonProps = {
  buttonText: string;
  handleClick: () => void;
};

export const Button = ({buttonText, handleClick }: ButtonProps): JSX.Element => (
  <button
    data-testid={`${buttonText}-button`}
    onClick={() => handleClick()}
  >
    {buttonText}
  </button>
);
