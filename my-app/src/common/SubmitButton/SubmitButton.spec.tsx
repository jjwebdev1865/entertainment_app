import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
  it('button is visible', () => {
    render(
      <SubmitButton
        buttonText="Submit"
        searchVal=""
        handleSearch={jest.fn()}
      />,
    );
    const element = screen.getByTestId('Submit-button');
    expect(element).toBeVisible();
  });
});
