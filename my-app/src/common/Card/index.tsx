import { Movie } from '../../types/models';
import { MovieModal } from '../MovieModal';
import { StyledMovieItem, StyledPoster } from './index.styles';
import React, { useState } from 'react';

type CardProps = {
  movie: Movie;
};

export const Card = ({ movie }: CardProps) => {
  const { id, poster } = movie;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledMovieItem key={id} data-testid={`movie-${id}`}>
        <StyledPoster src={poster} onClick={() => setModalOpen(!modalOpen)} />
      </StyledMovieItem>

      <MovieModal 
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
      />
    </>
  );
};
