import React, { useState } from "react";
import Modal from "react-modal";
import * as styles from './CardWithModal.styles';
import { Show } from "../../types/models";
import { formatSeenString } from "../../api/local_api/format";
import styled from "styled-components";

type TVCardProps = {
  show: Show;
}

const StyledModalContent = styled.div`
  float: right;
  width: 50%;
  margin: 0;
`;

const StyledModalImage = styled.div`
  float: left;
  width: 50%;
  margin: 0;
`;

export const TVCard = (props: TVCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { modalStyles, StyledPoster } = styles;
  const { show } = props;
  const { endDate, id, poster, rating, releaseDate, seasons, seen, title } = show;
  const seenString = formatSeenString(seen);

  return (
    <li>
      <StyledPoster src={poster} onClick={() => setModalOpen(!modalOpen)}/>

      <Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
      >
        <div data-testid={`tv-show-card-modal-container-${id}`}>
          <StyledModalImage>
            <img src={poster} style={{ width: '100%', height: '100%'}} />
          </StyledModalImage>
          <StyledModalContent data-testid={`tv-show-card-modal-content-${id}`}>
            <h3><strong>Title:</strong> {title} </h3>
            
            <div><strong>Seasons:</strong> {seasons}</div>
            <div><strong>TV Rating:</strong> {rating}</div>
            <div><strong>Runtime:</strong> {releaseDate} - {endDate}</div>
            <div><strong>Seen:</strong> {seenString}</div>
            <button onClick={() => setModalOpen(false)}>Close Modal</button>
          </StyledModalContent>
        </div>
      </Modal>
    </li>
  );
};