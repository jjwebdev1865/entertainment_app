import { Movie } from "../../types/models";
import { StyledMovieItem, StyledPoster } from "./index.styles";
import React from 'react';

type CardProps = {
  movie: Movie
}

export const Card = (props: CardProps) => {

  const { movie } = props;
  return (
    <StyledMovieItem key={movie.id} data-testid={`movie-${movie.id}`}>
      <StyledPoster src={movie.poster} />
      <h2>{movie.title}</h2>
      <p data-testid={`movie-${movie.id}-info`}>
        {movie.rating} | {movie.runTime} min. | My Rating:{' '}
        {movie.myRating}/10
      </p>
      {movie?.actors && (
        <p>
          {movie.actors[0]}, {movie.actors[1]}
        </p>
      )}
    </StyledMovieItem>
  );
};