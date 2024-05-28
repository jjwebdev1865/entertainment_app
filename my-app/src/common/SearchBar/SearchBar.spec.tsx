import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('should render SearchBar component correctly', () => {
    render(
      <SearchBar
        searchVal={'test'}
        inputHandler={jest.fn()}
        handleClear={jest.fn()}
      />,
    );
    const element = screen.getByTestId('search-section');
    expect(element).toBeVisible();
  });

  it('contains a search input', () => {
    render(
      <SearchBar
        searchVal={'test'}
        inputHandler={jest.fn()}
        handleClear={jest.fn()}
      />,
    );
    const element = screen.getByTestId('search-input');
    expect(element).toBeVisible();
  });

  it('contains a clear button', () => {
    render(
      <SearchBar
        searchVal={'test'}
        inputHandler={jest.fn()}
        handleClear={jest.fn()}
      />,
    );
    const element = screen.getByTestId('search-clear-button');
    expect(element).toBeVisible();
  });

  it('contains a search button', () => {
    render(
      <SearchBar
        searchVal={'test'}
        inputHandler={jest.fn()}
        handleClear={jest.fn()}
      />,
    );
    const element = screen.getByTestId('search-submit-button');
    expect(element).toBeVisible();
  });
});
