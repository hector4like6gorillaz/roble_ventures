import style from "./textbalon.module.css";

const PText = ({ text = "vacio" }: { text?: string }) => {
  return <p className={`${style["p-text"]}`}>{text} </p>;
};

export default PText;
