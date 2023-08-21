import style from "./textbalon.module.css";

const TextBaloon = ({ children }: { children?: JSX.Element }) => {
  return (
    <div className={`${style["container"]}`}>
      <div className={`${style["balloon-body"]}`}>{children}</div>
      <div className={`${style["balloon-arrow"]}`}></div>
    </div>
  );
};

export default TextBaloon;
