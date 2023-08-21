import style from "./dropdownHOC.module.css";

const OptionsText = ({
  text = "vacio",
  full,
}: {
  text?: string;
  full?: boolean;
}) => {
  return (
    <div className={`${style["div-selected"]} ${full && style["div-full"]}`}>
      <p className={`${style["p-option"]} ${full && style["p-full"]}`}>
        {text}
      </p>
    </div>
  );
};

export default OptionsText;
