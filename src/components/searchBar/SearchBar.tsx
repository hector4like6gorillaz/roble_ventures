import style from "./search.module.css";
import filter from "../../assets/panel/search-icon.svg";

const SearchBar = () => {
  return (
    <div className={`${style["container"]}`}>
      <p className={`${style["p-title"]}`}>Search</p>
      <input
        className={`${style["input-search"]}`}
        placeholder="Enter search terms"
      />
      <img className={`${style["icon-filter"]}`} src={filter} />
    </div>
  );
};

export default SearchBar;
