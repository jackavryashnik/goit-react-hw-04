import './App.css';
import { useState, useEffect } from 'react';
import fetchImages from '../../images-api';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ImageGallery from '../ImageGallery/ImageGallery';


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      try {
        const results = await fetchImages(query, page, setImages);
        setImages(prevImages => {
          return prevImages.length > 0 ? [...prevImages, ...results] : results;
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (event, inputValue) => {
    event.preventDefault();

    setPage(1);
    setImages([]);
    setIsError(false);
    setIsLoading(true);
    setQuery(inputValue);

    event.target.reset();
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  function openModal(image) {
    setIsOpen(true);
    setCurrentImage(image);
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentImage({});
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError ? (
        <ErrorMessage />
      ) : (
        images.length > 0 && (
          <ImageGallery images={images} onClick={openModal} />
        )
      )}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onLoad={handleLoadMore} />}
      <Toaster
        toastOptions={{
          style: {
            marginTop: '50px',
          },
        }}
      />
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={currentImage}
      />
    </>
  );
}

export default App;
