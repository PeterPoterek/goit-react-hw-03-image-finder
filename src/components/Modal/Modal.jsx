import PropTypes from 'prop-types';

import { ModalContainer, ModalImage, ModalCloseButton } from './ModalStyles';

const Modal = ({ closeModal, largeImageURL }) => {
  return (
    <ModalContainer>
      <ModalImage src={largeImageURL}></ModalImage>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
    </ModalContainer>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
