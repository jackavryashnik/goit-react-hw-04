import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onLoad }) => {
  return <button className={css.btn} onClick={onLoad}>Load More</button>;
};

export default LoadMoreBtn;
