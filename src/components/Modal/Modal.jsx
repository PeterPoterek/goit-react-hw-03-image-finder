import { ModalContainer, ModalImage, ModalCloseButton } from './ModalStyles';

const Modal = ({ closeModal, largeImageURL }) => {
  return (
    <ModalContainer>
      <ModalImage src={largeImageURL}></ModalImage>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
    </ModalContainer>
  );
};

export default Modal;
