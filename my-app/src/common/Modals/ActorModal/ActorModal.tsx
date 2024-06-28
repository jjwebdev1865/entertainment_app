import React from 'react';
import * as styles from '../Modal.styles';
import { Actor } from '../../../types/models';

type ActorModalProps = {
  actor: Actor
};

// NOTE: aria react-modal documentation: https://reactcommunity.org/react-modal/accessibility/
export const ActorModal = ({ actor }: ActorModalProps): JSX.Element => {
  const { filmography, review } = actor;
  const { StyledContentHeader, StyledSeasonReviewContent } = styles;

  const getFilms = (filmography: string[]): JSX.Element => {
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
             {getFilms(filmography)}
            
          </div>
          <div id="column-two">
            <StyledContentHeader>Review</StyledContentHeader>
            <p>{review}</p>
            {/* {getSeasonContent(seasonContent, selectedSeason)} */}
          </div>
      </StyledSeasonReviewContent>
    </div>
  );
};
