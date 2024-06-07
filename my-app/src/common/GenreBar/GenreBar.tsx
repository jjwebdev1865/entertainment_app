import React from "react";
import { Genre } from "../../types/models";

interface GenreBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleGenre: (e: any) => void;
  genreFilter: Genre | string;
  genreOptions: Genre[]
}

export const GenreBar = ({ handleGenre, genreFilter, genreOptions }: GenreBarProps) => (
  <select onChange={handleGenre} value={genreFilter}>
    {genreOptions.map(option => (
      <option key={`genre-bar-${option}`}>{option}</option>
    ))}
    <option>--Select a Genre--</option>
    <option>Comedy</option>
    <option>Sci-Fi</option>
  </select>
);
