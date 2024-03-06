import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.imgWrapper}>
      <img
        src={image.urls.small}
        data-regular={image.regular}
        alt={image.alt_description}
        onClick={()=> onClick(image)}
        className={css.img}
      />
    </div>
  );
};

export default ImageCard;
