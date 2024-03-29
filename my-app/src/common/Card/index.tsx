import { formatSeenString } from "../../api/local_api/format";
import { Movie } from "../../types/models";
import { StyledMovieItem, StyledPoster } from "./index.styles";
import React from 'react';

type CardProps = {
  movie: Movie
}

export const Card = (props: CardProps) => {
  const { movie } = props;
  const { id, myRating, poster, rating, runTime, seen, title } = movie;
  const seenString = formatSeenString(seen);
  return (
    <StyledMovieItem key={id} data-testid={`movie-${id}`}>
      <StyledPoster src={poster} />
      <h2>{title}</h2>
      <p data-testid={`movie-${id}-info`}>
        {rating} | {runTime} min. | My Rating: {myRating}/10
      </p>
      <p>Seen: {seenString}</p>
      {movie?.actors && (
        <p>
          {movie.actors[0]}, {movie.actors[1]}
        </p>
      )}
    </StyledMovieItem>
  );
};