import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('SubmitButton', () => {
  it('button is visible', () => {
    render(
      <Button
        buttonText="Submit"
        handleClick={jest.fn()}
      />,
    );
    const element = screen.getByTestId('Submit-button');
    expect(element).toBeVisible();
  });
});
