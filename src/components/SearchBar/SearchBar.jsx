import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="input"
          className={css.input}
        />
        <button type="submit" className={css.btn}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
