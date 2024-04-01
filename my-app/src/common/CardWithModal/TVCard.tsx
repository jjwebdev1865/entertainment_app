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

const StyledModalHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: white;
  width: 100%;
  height: 50px;
  text-align: center;
  h3 {
    padding-top: 10px;
    margin: 0;
  }
`;

const StyledFooter = styled.div`
position: fixed;
left: 50%;
right: 10%;
bottom: 0;
width: 50%;
color: white;
text-align: center;
border-top: 2px solid black;

button {
  padding: 5px;
}
`;

export const TVCard = (props: TVCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { modalStyles, StyledPoster } = styles;
  const { show } = props;
  const { endDate, id, poster, rating, releaseDate, seasons, seen, title, showReview } = show;
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
            <StyledModalHeader data-testid='modal-header-container'>
              <h3><strong>Title:</strong> {title} </h3>
            </StyledModalHeader>
            <div><strong>Seasons:</strong> {seasons}</div>
            <div><strong>TV Rating:</strong> {rating}</div>
            <div><strong>Runtime:</strong> {releaseDate} - {endDate}</div>
            <div><strong>Seen:</strong> {seenString}</div>

            {showReview && (
              <div> here is where the show review goes</div>
            )}

            <StyledFooter>
              <div>placeholder for pagination</div>
              <button onClick={() => setModalOpen(false)}>Close Modal</button>
            </StyledFooter>
           
          </StyledModalContent>
        </div>
      </Modal>
    </li>
  );
};