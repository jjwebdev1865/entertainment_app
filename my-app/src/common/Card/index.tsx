import { Movie, Show } from '../../types/models';
import { EntertainmentModal } from '../Modals/Modal';
import { StyledMovieItem, StyledPoster } from './index.styles';
import React, { useState } from 'react';

type CardProps = {
  details: Movie | Show;
  type: 'movie' | 'show'
};

export const Card = ({ details, type }: CardProps) => {
  const { id, poster } = details;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledMovieItem key={id} data-testid={`movie-${id}`}>
        <StyledPoster data-testid={`movie-${id}-poster`} src={poster} onClick={() => setModalOpen(!modalOpen)} />
      </StyledMovieItem>

      {type === 'movie' && <EntertainmentModal modalOpen={modalOpen} setModalOpen={setModalOpen} type='movie' details={details as Movie}/> }
      {type === 'show' && <EntertainmentModal modalOpen={modalOpen} setModalOpen={setModalOpen} type='show' details={details as Show}/> }
    </>
  );
};
