import React, { useState, useEffect, Fragment, useRef } from "react";
import NavBar from "src/components/navbar/NavBar";
import style from "./panel.module.css";
import pen from "../../assets/panel/pencil-icon.svg";
import x from "../../assets/panel/x-icon.svg";
import mail from "../../assets/panel/mail-icon.svg";
import chevron from "../../assets/panel/chevron-down.svg";
import avatar from "../../assets/navbar/user-icon.svg";
import filter from "../../assets/panel/filter-icon.svg";
import options from "../../assets/panel/dots-vertical.svg";
import Button from "src/components/button/Button";
import DropdownHOC from "src/components/dropdown/DropdownHOC";
import OptionsText from "src/components/dropdown/OptionsText";
import SearchBar from "src/components/searchBar/SearchBar";
import TablePanel from "./components/table/TablePanel";
import Pagination from "src/components/pagination/Pagination";
import Modal from "src/components/modal/Modal";

const PanelModule = () => {
  const [showModal, setshowModal] = useState(false);
  const divFhater = useRef<HTMLDivElement>(null);
  let dropdown: any;

  useEffect(() => {
    if (showModal) {
      let getMeTo = document.getElementById("divScroll");
      getMeTo?.scrollTo(0, 0);

      if (!divFhater) return;
      divFhater.current!.style.overflowY = "hidden";
    } else {
      if (!divFhater) return;
      divFhater.current!.style.overflowY = "auto";
    }
  }, [showModal]);

  return (
    <div
      id="divScroll"
      ref={divFhater}
      className={`${style["container-modal"]}`}
    >
      {showModal && (
        <Modal onCancel={() => setshowModal(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${style["modal-window"]}`}
          >
            <div className={`${style["superior-container"]}`}>
              <div className={`${style["title-container"]}`}>
                <p className={`${style["p-title"]}`}>1st degree connections</p>
                <p className={`${style["p-quanty"]}`}>7</p>
              </div>
              <img
                className={`${style["img-close"]}`}
                onClick={() => setshowModal(false)}
                src={x}
              />
            </div>
            <div className={`${style["line"]}`}></div>

            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <Fragment key={item}>
                  {(() => {
                    let dropdown2: any;
                    return (
                      <div className={`${style["contact-div-container"]}`}>
                        <div className={`${style["div-avatar-names"]}`}>
                          <div className={`${style["avatar"]}`}>
                            <img src={avatar} />
                          </div>
                          <div className={`${style["user-data"]}`}>
                            <p className={`${style["p-data"]}`}>Name here</p>
                            <p className={`${style["p-data"]}`}>
                              Company name · Location
                            </p>
                          </div>
                        </div>
                        <DropdownHOC triggerRef={(el) => (dropdown2 = el)}>
                          {React.createElement(() => (
                            <Button
                              text="Start a convo"
                              size="small"
                              leftIcon={mail}
                              rigthIcon={chevron}
                              width="fit-content"
                            />
                          ))}
                          {React.createElement(() => (
                            <div
                              className={`${style["options-drop-button-container"]}`}
                            >
                              <div className={`${style["options-drop"]}`}>
                                {[
                                  "LP template",
                                  "Founder template",
                                  "Co-investor template",
                                  "Conference template",
                                ].map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      onClick={() => dropdown2.click()}
                                    >
                                      <OptionsText full text={item} />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </DropdownHOC>
                      </div>
                    );
                  })()}
                </Fragment>
              );
            })}
          </div>
        </Modal>
      )}
      <NavBar isAuth={true} />
      <div className={`${style["container"]}`}>
        <div className={`${style["buttons-div"]}`}>
          <div className={`${style["list-div"]}`}>
            <p className={`${style["p-list-name"]}`}>List</p>
            <img className={`${style["icon-pencil"]}`} src={pen} />
          </div>

          <Button
            color="white"
            size="small"
            width="fit-padding"
            text="Save List 1"
          />
          <Button
            color="white"
            size="small"
            width="fit-padding"
            text="Export List 1"
          />
          <DropdownHOC triggerRef={(el) => (dropdown = el)}>
            {React.createElement(() => (
              <img className={`${style["icon-pencil"]}`} src={options} />
            ))}
            {React.createElement(() => (
              <div className={`${style["options-drop-container"]}`}>
                <div onClick={() => dropdown.click()}>
                  <OptionsText text="Delete list" />
                </div>
              </div>
            ))}
          </DropdownHOC>
        </div>

        <div className={`${style["div-sear-bar"]}`}>
          <SearchBar />
          <Button
            color="white"
            size="small"
            width="fit-padding"
            leftIcon={filter}
            text="Filters"
          />
        </div>
        <TablePanel showModal={() => setshowModal(true)} />
        <Pagination />
      </div>
    </div>
  );
};

export default PanelModule;
