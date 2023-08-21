import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import style from "./landing.module.css";
import ContainerHOC from "src/components/container/Container";
import NavBar from "src/components/navbar/NavBar";
import three from "../../assets/three/Group.svg";
import chevronRight from "../../assets/chevron/chevron-right.svg";
import Button from "src/components/button/Button";

const LandingModule = () => {
  const navigate = useNavigate();
  return (
    <ContainerHOC>
      <Fragment>
        <NavBar showLoginButton={true} />
        <div className={`${style["container-div"]}`}>
          <img className={`${style["img-three"]}`} src={three} />
          <p className={`${style["p-title"]}`}>
            Roble Ventures
            <br />
            Network Analysis Tool
          </p>
          <div className={`${style["buttons-div"]}`}>
            <Button
              text="Learn how it works"
              rigthIconStyle={`${style["chevron-icon"]}`}
              rigthIcon={chevronRight}
              onClick={() => navigate("/guide")}
            />
            <Button text="Upload CSV" onClick={() => navigate("/upload")} />
          </div>
        </div>
      </Fragment>
    </ContainerHOC>
  );
};

export default LandingModule;
