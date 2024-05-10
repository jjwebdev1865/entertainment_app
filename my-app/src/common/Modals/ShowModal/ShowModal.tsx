import React, { useState } from "react";
import { SeasonContent, Show } from "../../../types/models";
import * as styles from '../Modal.styles';

interface ShowModalProps {
  show: Show
}

export const ShowModal = ({ show }: ShowModalProps): JSX.Element => {
  const { endDate, myRating, rating, releaseYear, seen, seasons, seasonContent } = show;
  const { StyledContentDescriptors, StyledSeasonsPagination, StyledSeasonReviewContent, StyledContentHeader } = styles;
  const [selectedSeason, setSelectedSeason] = useState(1);

  const seasonsList = (): React.ReactNode => {
    const buttons = [];
    for (let i = 1; i <= seasons; i++) {
      buttons.push(<li key={`pagination-button-season-${i}`}><button onClick={() => setSelectedSeason(i)}>{i}</button></li>);
    }
    return (
      <ul>{buttons}</ul>
    );
  };

  const getSeasonActors = (seasonContent: SeasonContent[], season: number): JSX.Element => {
    const currentSeason = seasonContent.find(item => item.season === season);
    return (
      <ul>
        {currentSeason?.actors.map(actor => (
          <li key={`season-${season}-${actor}`}>{actor}</li>
        ))}
      </ul>
    );
  };

  const getSeasonContent = (seasonContent: SeasonContent[], season: number): JSX.Element => {
    const currentSeason = seasonContent.find(item => item.season === season);
    return <p>{currentSeason?.review}</p>;
  };

  return (
    <div data-testid='modal-content'>
      <StyledContentDescriptors id='modal-content-descriptors'>
        <p><strong>My Rating:</strong> {myRating}/10</p>
        <p><strong>Parent Guide:</strong> Rated {rating}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Final Season:</strong> {endDate}</p>
        <p><strong>First Seen:</strong> {seen}</p>
      </StyledContentDescriptors>
      <StyledSeasonsPagination>
      <h3 style={{ textAlign: 'center'}}>Season: {seasonsList()}</h3>
      </StyledSeasonsPagination>
      <div>
        <h3 style={{ textAlign: 'center'}}>Season: {selectedSeason}</h3>
        <StyledSeasonReviewContent>
          <div id="column-one">
             <StyledContentHeader>Top Actors</StyledContentHeader>
             {getSeasonActors(seasonContent, selectedSeason)}
            
          </div>
          <div id="column-two">
            <StyledContentHeader>Review</StyledContentHeader>
            {getSeasonContent(seasonContent, selectedSeason)}
          </div>
          
        </StyledSeasonReviewContent>
      </div>
    </div>
  );
};