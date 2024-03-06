import Modal from 'react-modal';
// import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ modalIsOpen, closeModal, image: {user, description, alt_description, imgUrl, likes} }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {/* TODO: modal stracture
      <p>{description}</p>
      <p>{likes}</p>
      <p>{alt_description}</p>
      <p>{imgUrl}</p>
      <p>{`${user.firs_name } ${user.last_name}`}</p> */}
    </Modal>
  );
};

export default ImageModal;
