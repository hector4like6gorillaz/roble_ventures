import style from "./container.module.css";

const ContainerHOC = ({ children }: { children: JSX.Element }) => {
  return <div className={`${style["container-black"]}`}>{children} </div>;
};

export default ContainerHOC;
