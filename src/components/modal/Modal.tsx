import style from "./modal.module.css";

const Modal = ({
  onCancel,
  children,
}: {
  onCancel?: () => void;
  children?: JSX.Element;
}) => {
  return (
    <div className={`${style["modal-div"]}`} onClick={onCancel}>
      {children}
    </div>
  );
};

export default Modal;
