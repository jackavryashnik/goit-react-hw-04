import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

const notify = () => toast.error('Enter search query first.');

const SearchBar = ({ onSubmit }) => {
  const hendleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const inputValue = form.elements.input.value;
    const trimedValue = inputValue.trim().toLowerCase();

    if (!trimedValue) {
      return notify();
    }
    onSubmit(trimedValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="input"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
