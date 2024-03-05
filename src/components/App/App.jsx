import './App.css';
import { useState, useEffect } from 'react';
import fetchImages from '../../images-api';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';

const notify = () => toast.error('Enter search query first.');

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

  const handleSubmit = event => {
    event.preventDefault();

    setPage(1);
    setImages([]);
    setIsError(false);

    const form = event.target;
    const inputValue = form.elements.input.value;

    if (!inputValue.trim()) {
      notify();
    } else {
      setIsLoading(true);
    }

    setQuery(inputValue.trim().toLowerCase());
    form.reset();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError ? (
        <ErrorMessage />
      ) : (
        images.length > 0 &&
        images.map(image => (
          <img
            key={image.id}
            src={image.urls.smal}
            alt={image.alt_description}
          />
        ))
      )}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onLoad={handleLoadMore} />}
      <Toaster />
    </>
  );
}

export default App;
