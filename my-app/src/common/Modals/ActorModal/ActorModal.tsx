import React from 'react';
import * as styles from '../Modal.styles';
import { Actor, Movie } from '../../../types/models';

type ActorModalProps = {
  actor: Actor
};

// NOTE: aria react-modal documentation: https://reactcommunity.org/react-modal/accessibility/
export const ActorModal = ({ actor }: ActorModalProps): JSX.Element => {
  // const {title, myRating, rating, runTime, releaseYear, actors, review, seen} = movie;
  const { StyledContentHeader, StyledSeasonReviewContent, StyledSummary } = styles;

  const getSeasonActors = (filmography: string[]): JSX.Element => {
    return (
      <ul>
        {filmography.map(film => (
          <li key={`film-${film}`}>{film}</li>
        ))}
      </ul>
    );
  };

  return (
    <div id='modal-content'>
      <StyledSeasonReviewContent>
        <div id="column-one">
             <StyledContentHeader>Filmography</StyledContentHeader>
             {getSeasonActors(actor.filmography)}
            
          </div>
          <div id="column-two">
            <StyledContentHeader>Review</StyledContentHeader>
            {/* {getSeasonContent(seasonContent, selectedSeason)} */}
          </div>
      </StyledSeasonReviewContent>
      {/* <StyledContentDescriptors id='modal-content-descriptors'>
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
      )} */}
    </div>
  );
};
