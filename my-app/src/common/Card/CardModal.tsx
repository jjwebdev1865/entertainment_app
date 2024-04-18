import React, { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';
import { modalStyles } from './index.styles';

type CardModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  headingText: string;
};

export const CardModal = (props: CardModalProps): JSX.Element => {
  const { modalOpen, setModalOpen, headingText } = props;
  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={modalStyles}
    >
      <h2>{headingText}</h2>
    </Modal>
  );
};
