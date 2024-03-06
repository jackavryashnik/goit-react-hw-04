import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.galery}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
