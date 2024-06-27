import React, { Dispatch, SetStateAction } from "react";
import { Actor, Movie, Show } from "../../types/models";
import Modal from 'react-modal';
import * as styles from './Modal.styles';
import { MovieModal } from "./MovieModal/MovieModal";
import { ShowModal } from "./ShowModal/ShowModal";
import { ActorModal } from "./ActorModal/ActorModal";

type EntertainmentModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  type: 'movie' | 'show' | 'actor';
  details: Movie | Show | Actor;
};

// NOTE: aria react-modal documentation: https://reactcommunity.org/react-modal/accessibility/
export const EntertainmentModal = ({modalOpen, setModalOpen, details, type}: EntertainmentModalProps): JSX.Element => {
  const { modalStyles, StyledHeader } = styles;
  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalOpen}
      closeTimeoutMS={200}
      onRequestClose={() => setModalOpen(false)}
      style={modalStyles}
      aria={{
        labelledby: 'modal-header',
        describedby: 'modal-content',
        modal: 'true'
      }}
      shouldCloseOnEsc={true}
    >
    <div>
      <button onClick={() => setModalOpen(false)} style={{ float: 'right'}}>X</button>
    </div>
    <StyledHeader id='modal-header-container'>
      <h1 id='modal-header'>{details.title}</h1>
    </StyledHeader>

    {type === 'movie' && <MovieModal movie={details as Movie} />}
    {type === 'show' && <ShowModal show={details as Show} />}
    {type === 'actor' && <ActorModal actor={details as Actor} />}

  </Modal>
  );
};