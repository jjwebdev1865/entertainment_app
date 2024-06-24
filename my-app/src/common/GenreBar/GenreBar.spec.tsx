import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GenreBar } from './GenreBar';

describe('GenreBar', () => {
  
    it('renders a genre bar', () => {
      render(<GenreBar handleGenre={jest.fn()} genreFilter='Comedy' genreOptions={['Comedy', 'Action']} />);
      const genreBar = screen.getByTestId('genre-bar-filter');
      expect(genreBar).toBeVisible();
    });

    it('should render without errors', async () => {
      const mockedOnChange = jest.fn();
      const { getByText } = render(
        <GenreBar 
          genreOptions={['Comedy', 'Action']}
          handleGenre={mockedOnChange} 
          genreFilter={''} 
        />);

      const placeholder = getByText('--Select a Genre--');
      expect(placeholder).toBeTruthy();
    });
  });