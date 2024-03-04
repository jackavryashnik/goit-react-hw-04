import './App.css';
import { useState, useEffect } from 'react';
import fetchImages from '../../images-api';
import { MagnifyingGlass } from 'react-loader-spinner';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import toast, { Toaster } from 'react-hot-toast';

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
        await fetchImages(query, page, setImages);
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
    setIsError(false);
    setIsLoading(true);

    const form = event.target;
    const inputValue = form.elements.input.value;

    if (!inputValue) notify();
    setQuery(inputValue);
    form.reset();
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
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      <Toaster />
    </>
  );
}

export default App;
