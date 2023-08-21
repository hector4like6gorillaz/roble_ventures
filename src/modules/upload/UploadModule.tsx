import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/components/button/Button";
import ContainerHOC from "src/components/container/Container";
import NavBar from "src/components/navbar/NavBar";
import PText from "src/components/textBaloon/PText";
import TextBaloon from "src/components/textBaloon/TextBaloon";
import style from "./upload.module.css";
import three from "../../assets/three/Group.svg";
import threeWait from "../../assets/upload/three-wait.svg";

const UploadModule = () => {
  const [upload, setupload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (upload) {
      setTimeout(() => {
        setupload(!upload);
        navigate("/panel");
      }, 3000);
    }
  }, [upload]);

  return (
    <ContainerHOC>
      <Fragment>
        <NavBar isAuth={true} />
        {!upload ? (
          <Fragment>
            <div className={`${style["div-content"]}`}>
              <TextBaloon>
                <Fragment>
                  <PText text="Help me understand who you would like to connect with." />
                </Fragment>
              </TextBaloon>
              <img className={`${style["img-three"]}`} src={three} />
              <Button text="Upload CSV" onClick={() => setupload(!upload)} />
            </div>
            <p className={`${style["p-lorem"]}`}>Use a lorem docet erit.</p>
          </Fragment>
        ) : (
          <div className={`${style["loading-window"]}`}>
            <img className={`${style["img-wait"]}`} src={threeWait} />
            <p className={`${style["p-message"]}`}>
              Generating your networking hub{" "}
            </p>
            <div className={`${style["spin-div"]}`}>
              <div className={`${style["spin"]}`}></div>
            </div>
          </div>
        )}
      </Fragment>
    </ContainerHOC>
  );
};

export default UploadModule;
