import style from "./pagination.module.css";
import left from "../../assets/panel/chevron.svg";

const Pagination = () => {
  return (
    <div className={`${style["container"]}`}>
      <img className={`${style["cursor-pointer"]}`} src={left} />
      <p className={`${style["p-text"]}`}>Previous</p>
      <p className={`${style["p-labels"]}`}>1</p>
      <p className={`${style["p-labels"]} ${style["p-labels-active"]}`}>2</p>
      <p className={`${style["p-labels"]}`}>3</p>
      <p className={`${style["p-labels"]}`}>4</p>
      <p className={`${style["p-labels"]}`}>5</p>
      <p className={`${style["p-labels"]}`}>...</p>
      <p className={`${style["p-labels"]}`}>11</p>
      <p className={`${style["p-text"]}`}>Next</p>
      <img className={`${style["icon-reverse"]}`} src={left} />
    </div>
  );
};

export default Pagination;
