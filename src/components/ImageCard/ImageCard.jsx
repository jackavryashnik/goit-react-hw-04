const ImageCard = ({ image, onClick }) => {
  return (
    <img
      src={image.urls.small}
      data-regular={image.regular}
      alt={image.alt_description}
      id={image.id}
      onClick={onClick}
    />
  );
};

export default ImageCard;
