import css from './ImageCard.module.css';

const ImageCard = ({ image: { alt_description, urls, user, likes, description, color }, onClick }) => {
  return (
    <div className={css.imgWrapper} style={{ backgroundColor: color }}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => onClick({ alt_description, imgUrl: urls.regular, user, likes, description })}
        className={css.img}
      />
    </div>
  );
};

export default ImageCard;
