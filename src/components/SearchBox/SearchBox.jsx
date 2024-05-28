import css from "./SearchBox.module.css";

const SearchBox = ({ filterName, onFilter }) => {
  return (
    <div>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        className={css.searchBox}
        onChange={(event) => onFilter(event.target.value)}
        type="text"
        value={filterName}
      ></input>
    </div>
  );
};

export default SearchBox;
