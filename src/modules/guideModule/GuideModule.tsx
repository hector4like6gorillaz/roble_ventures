import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerHOC from "src/components/container/Container";
import NavBar from "src/components/navbar/NavBar";
import three from "../../assets/three/Group.svg";
import csv from "../../assets/guide/placeholderCSV.jpg";
import placex from "../../assets/guide/place-x.jpg";
import style from "./guide.module.css";
import TextBaloon from "src/components/textBaloon/TextBaloon";
import PText from "src/components/textBaloon/PText";
import Button from "src/components/button/Button";
import chevronRight from "../../assets/chevron/chevron-right.svg";

const cards = [
  { name: "David", subtitle: "10,000 connections" },
  { name: "Sergio", subtitle: "9,100 connections" },
  { name: "Emily", subtitle: "9,300 connections" },
];

const GuideModule = () => {
  const [guideStep, setGuideStep] = useState(1);
  const navigate = useNavigate();
  return (
    <ContainerHOC>
      <Fragment>
        <NavBar />
        {(() => {
          switch (guideStep) {
            case 1:
              return (
                <div className={`${style["div-content"]}`}>
                  <TextBaloon>
                    <Fragment>
                      <p className={`${style["hi-p"]}`}>Hi, I’m Rob!</p>
                      <PText text="I’m here to guide you through Robles Proprietary Network tool." />
                    </Fragment>
                  </TextBaloon>
                  <img className={`${style["img-three"]}`} src={three} />
                  <Button
                    text="Next"
                    rigthIconStyle={`${style["chevron-icon"]}`}
                    rigthIcon={chevronRight}
                    onClick={() => setGuideStep(2)}
                  />
                </div>
              );

            case 2:
              return (
                <div className={`${style["div-content-2"]}`}>
                  <p className={`${style["p-upload"]}`}>
                    Upload a CSV. Make sure to organize your
                    <br />
                    CSV lorem ipsum docet...
                  </p>

                  <img className={`${style["img-csv"]}`} src={csv} />
                  <Button
                    text="Next"
                    rigthIconStyle={`${style["chevron-icon"]}`}
                    rigthIcon={chevronRight}
                    onClick={() => setGuideStep(3)}
                  />
                </div>
              );
            case 3:
              return (
                <div className={`${style["div-content-3"]}`}>
                  <p className={`${style["p-upload"]}`}>
                    Upload a CSV. Make sure to organize your
                    <br />
                    CSV lorem ipsum docet...
                  </p>
                  <div className={`${style["div-cards-container"]}`}>
                    {cards.map((item, index) => {
                      return (
                        <div key={index} className={`${style["card-small"]}`}>
                          <p className={`${style["p-name"]}`}>{item.name} </p>
                          <p className={`${style["p-subtitle"]}`}>
                            {item.subtitle}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <Button
                    text="Next"
                    rigthIconStyle={`${style["chevron-icon"]}`}
                    rigthIcon={chevronRight}
                    onClick={() => setGuideStep(4)}
                  />
                </div>
              );
            case 4:
              return (
                <div className={`${style["div-content-3"]}`}>
                  <p className={`${style["p-upload"]}`}>
                    We’ll generate a custom networking hub.
                  </p>
                  <img className={`${style["img-csv"]}`} src={placex} />
                  <Button
                    text="Get started"
                    rigthIconStyle={`${style["chevron-icon"]}`}
                    rigthIcon={chevronRight}
                    onClick={() => navigate("/upload")}
                  />
                </div>
              );

            default:
              return <></>;
          }
        })()}
      </Fragment>
    </ContainerHOC>
  );
};

export default GuideModule;
