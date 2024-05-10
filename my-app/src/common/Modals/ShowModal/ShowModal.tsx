import React from "react";
import { Show } from "../../../types/models";
import * as styles from '../Modal.styles';

interface ShowModalProps {
  show: Show
}

export const ShowModal = ({ show }: ShowModalProps): JSX.Element => {
  console.log(show)
  const { endDate, myRating, rating, releaseYear, seen } = show;
  const { StyledContentDescriptors } = styles;
  return (
    <div data-testid='modal-content'>
      <StyledContentDescriptors id='modal-content-descriptors'>
        <p><strong>My Rating:</strong> {myRating}/10</p>
        <p><strong>Parent Guide:</strong> Rated {rating}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Final Season:</strong> {endDate}</p>
        <p><strong>First Seen:</strong> {seen}</p>
      </StyledContentDescriptors>
    </div>
  );
};