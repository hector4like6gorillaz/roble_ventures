import style from "./label.module.css";

const LabelButton = ({
  type = 1,
  label = "vacio",
  quanty = 0,
  onClick,
}: {
  type?: number;
  label?: string;
  quanty?: number;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`${style[`body-${type}`]}`}
    >
      <p className={`${style["p-label"]}`}>{label} </p>
      <p className={`${style["p-quanty"]}`}>{quanty}</p>
    </div>
  );
};

export default LabelButton;
