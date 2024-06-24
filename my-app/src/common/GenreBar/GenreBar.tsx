import React from "react";
import { Genre } from "../../types/models";

interface GenreBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleGenre: (e: any) => void;
  genreFilter: Genre | string;
  genreOptions: Genre[]
}

export const GenreBar = ({ handleGenre, genreFilter, genreOptions }: GenreBarProps): JSX.Element => (
  <select data-testid='genre-bar-filter' onChange={handleGenre} value={genreFilter}>
    <option>--Select a Genre--</option>
    {genreOptions.map(option => (
      <option key={`genre-bar-${option}`}>{option}</option>
    ))}
  </select>
);
