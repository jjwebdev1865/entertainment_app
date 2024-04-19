import React, { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';
// import { StyledContentDescriptors, StyledHeader, modalStyles } from './MovieModal.styles';
import * as styles from './MovieModal.styles';
import { ParentGuideRatings } from '../../types/models';

type CardModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  headingText: string;
  myRating: number;
  runtime: number;
  rating: ParentGuideRatings;
  actors: string[]
};

// NOTE: aria react-modal documentation: https://reactcommunity.org/react-modal/accessibility/
export const MovieModal = (props: CardModalProps): JSX.Element => {
  const { modalOpen, setModalOpen, headingText, myRating, runtime, rating, actors } = props;
  const { StyledContentDescriptors, StyledHeader, modalStyles } = styles;
  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={modalStyles}
      aria={{
        labelledby: 'modal-header',
        describedby: 'modal-content',
        modal: 'true'
      }}
    >
      <StyledHeader id='modal-header-container'>
        <h1 id='modal-header'>{headingText}</h1>
      </StyledHeader>

      <div id='modal-content'>
        <StyledContentDescriptors id='modal-content-descriptors'>
          <p><strong>My Rating:</strong> {myRating}/10</p>
          <p><strong>Parent Guide:</strong> Rated {rating}</p>
          <p><strong>Runtime:</strong> {runtime} minutes</p>
        </StyledContentDescriptors>
        <div id='modal-content-key-actors'>
          <h2>Actors</h2>
          <ul>
            {actors.map(actor => (
              <li key={`${headingText}-${actor}`}>{actor}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer>
        <button onClick={() => setModalOpen(false)} >Close</button>
      </footer>
      
    </Modal>
  );
};
