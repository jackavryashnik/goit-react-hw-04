import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { IoMdHeartEmpty } from 'react-icons/io';

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

const ImageModal = ({ isOpen, onRequestClose, image: {user, description, alt_description, imgUrl , likes} }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div className={css.imageWrapper}>
        <img className={css.image} src={imgUrl} alt={alt_description} />
      </div>
      <div className={css.thumbInfo}>
        <div className={css.user}>
          <img
            className={css.avatar}
            src={user?.profile_image.small}
            alt={alt_description ?? 'Unrecognized image'}
          />
          <span>@{user?.username}</span>
        </div>
        <div className={css.likes}>
          <IoMdHeartEmpty size={20} />
          <span>{likes}</span>
        </div>
      </div>
      <div>
        <p>{description || 'No description here'}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
