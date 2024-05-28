import React from 'react';

type ButtonProps = {
  buttonText: string;
  handleClick: () => void;
};

export const Button = (props: ButtonProps): JSX.Element => {
  const { buttonText, handleClick } = props;
  return (
    <button
      data-testid={`${buttonText}-button`}
      onClick={() => handleClick()}
    >
      {buttonText}
    </button>
  );
};
