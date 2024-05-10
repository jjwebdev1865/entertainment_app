import React, { Dispatch, SetStateAction } from "react";
import { Movie, Show } from "../../types/models";
import Modal from 'react-modal';
import * as styles from './Modal.styles';
import { MovieModal } from "./MovieModal";
import { ShowModal } from "./ShowModal";

type EntertainmentModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  type: 'movie' | 'show';
  details: Movie | Show;
};

// NOTE: aria react-modal documentation: https://reactcommunity.org/react-modal/accessibility/
export const EntertainmentModal = ({modalOpen, setModalOpen, details, type}: EntertainmentModalProps): JSX.Element => {
  const { modalStyles, StyledHeader } = styles;
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
    <div>
      <button onClick={() => setModalOpen(false)} style={{ float: 'right'}}>X</button>
    </div>
    <StyledHeader id='modal-header-container'>
      <h1 id='modal-header'>{details.title}</h1>
    </StyledHeader>
    {type === 'movie' && <MovieModal movie={details as Movie} />}
    {type === 'show' && <ShowModal show={details as Show} />}
  </Modal>
  );
};