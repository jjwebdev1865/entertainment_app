import React from 'react';
import * as styles from '../Modal.styles';
import { Movie } from '../../../types/models';

type CardModalProps = {
  movie: Movie
};

// NOTE: aria react-modal documentation: https://reactcommunity.org/react-modal/accessibility/
export const MovieModal = ({ movie}: CardModalProps): JSX.Element => {
  const {title, myRating, rating, runTime, releaseYear, actors, review, seen} = movie;
  const { StyledContentDescriptors, StyledActorsList, StyledSummary } = styles;

  return (
    <div id='modal-content'>
      <StyledContentDescriptors id='modal-content-descriptors'>
        <p><strong>My Rating:</strong> {myRating}/10</p>
        <p><strong>Parent Guide:</strong> Rated {rating}</p>
        <p><strong>Runtime:</strong> {runTime} minutes</p>
        <p><strong>First Seen:</strong> {seen}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
      </StyledContentDescriptors>
      <StyledActorsList id='modal-content-key-actors'>
        <h2>Actors</h2>
        <ul>
          {actors.map(actor => (
            <li key={`${title}-${actor}`}>{actor}</li>
          ))}
        </ul>
      </StyledActorsList>
      {review && (
        <StyledSummary id='modal-content-jims-summary'>
          <h2>My Review</h2>
          <p>{review}</p>
        </StyledSummary>
      )}
    </div>
  );
};
