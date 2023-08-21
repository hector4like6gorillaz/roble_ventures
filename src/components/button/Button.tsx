import style from "./button.module.css";

const Button = ({
  text,
  size = "small",
  leftIcon,
  leftIconStyle,
  rigthIcon,
  rigthIconStyle,
  width = "large",
  onClick,
  disabled = false,
  color = "black",
}: {
  text: string;
  size?: "medium" | "small";
  leftIcon?: string;
  leftIconStyle?: string;
  rigthIcon?: string;
  rigthIconStyle?: string;
  width?: "large" | "fit-padding" | "fit-content";
  onClick?: () => void;
  disabled?: boolean;
  color?: "white" | "black";
}) => {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick && onClick()}
      className={`${style[`button-style-${color}`]} ${style[width]} ${
        style[`button-size-${size}`]
      }`}
    >
      {leftIcon && <img className={`${leftIconStyle}`} src={leftIcon} />}
      {text}
      {rigthIcon && <img className={`${rigthIconStyle}`} src={rigthIcon} />}
    </button>
  );
};

export default Button;
