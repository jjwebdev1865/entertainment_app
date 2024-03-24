import React, { useState } from "react";
import Modal from "react-modal";
import * as styles from './CardWithModal.styles';
import { Show } from "../../types/models";

type TVCardProps = {
  show: Show;
}

export const TVCard = (props: TVCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { modalStyles, StyledPoster } = styles;
  const { show } = props;
  const { endDate, poster, rating, releaseDate, seasons, seen, title } = show;

  let seenString = '';
  seen.map((item, index) => {
    if (index + 1 === seen.length) {
      seenString = seenString + item;
    } else {
      seenString = seenString + `${item}, `;
    }
  });

  return (
    <li>
      <StyledPoster src={poster} onClick={() => setModalOpen(!modalOpen)}/>

      <Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
      >
        <div><strong>Title:</strong> {title}</div>
        <div><strong>Seasons:</strong> {seasons}</div>
        <div><strong>TV Rating:</strong> {rating}</div>
        <div><strong>Runtime:</strong> {releaseDate} - {endDate}</div>
        <div><strong>Seen:</strong> {seenString}</div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </li>
  );
};