import style from "./table.module.css";
import avatar from "../../../../assets/navbar/user-icon.svg";
import mail from "../../../../assets/panel/mail-icon.svg";
import LabelButton from "../labelButton/LabelButton";
import Button from "src/components/button/Button";

const TablePanel = ({ showModal }: { showModal: () => void }) => {
  return (
    <div className={`${style["container"]}`}>
      <div className={`${style["container-title"]}`}>
        <div className={`${style["div-check"]}`}>
          <input type="checkbox" />
          <p className={`${style["p-titles"]}`}>Lead name</p>
        </div>
        <p className={`${style["p-titles"]}`}>Robles connection</p>
        <p className={`${style["p-titles"]}`}>Lead name</p>
        <p className={`${style["p-titles"]}`}>Commonalities</p>
        <p className={`${style["p-titles"]}`}>Lead contact info</p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_item, index) => {
        return (
          <div key={index} className={`${style["container-element"]}`}>
            <div className={`${style["div-check"]}`}>
              <input type="checkbox" />
              <div className={`${style["avatar-all"]}`}>
                <div className={`${style["avatar-container"]}`}>
                  <img src={avatar} />
                </div>
                <div className={`${style["avatar-contact"]}`}>
                  <p className={`${style["p-titles"]}`}>Name here</p>
                  <p className={`${style["p-titles"]}`}>Company name</p>
                </div>
              </div>
            </div>
            <p className={`${style["p-titles"]}`}>David Perez</p>
            <div className={`${style["div-labels"]}`}>
              <LabelButton
                label="1st connections"
                quanty={7}
                onClick={() => showModal()}
              />
              <LabelButton type={2} label="2nd connections" quanty={40} />
            </div>
            <div className={`${style["div-Commonalities"]}`}>
              <p className={`${style["p-titles"]}`}>
                You both went to Harvard Business school.
              </p>
              <p className={`${style["p-titles"]}`}>
                You both live in Austin, Texas.
              </p>
            </div>
            <div className={`${style["div-labels"]}`}>
              <Button leftIcon={mail} width="fit-content" text="Email" />
              <Button
                text="LinkefIn Profile"
                width="fit-content"
                size="small"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TablePanel;
