import React, { Fragment } from "react";
import style from "./navbar.module.css";
import logo from "../../assets/logo/Logo.png";
import userIcon from "../../assets/navbar/user-icon.svg";
import Glogo from "../../assets/logo/Google_Logo.png";
import DropdownHOC from "../dropdown/DropdownHOC";
import OptionsText from "../dropdown/OptionsText";

const NavBar = ({
  showLoginButton = false,
  isAuth,
}: {
  showLoginButton?: boolean;
  isAuth?: boolean;
}) => {
  let dropdown: any;
  return (
    <div className={`${style["container-nav"]}`}>
      <img className={`${style["img-logo"]}`} src={logo} />
      {(() => {
        switch (isAuth) {
          case true:
            return (
              <DropdownHOC triggerRef={(el) => (dropdown = el)}>
                {React.createElement(() => (
                  <div className={`${style["user-info"]}`}>
                    <img className={`${style["user-icon"]}`} src={userIcon} />
                    <p className={`${style["user-name"]}`}>Hi, David</p>
                  </div>
                ))}
                {React.createElement(() => (
                  <div className={`${style["options-drop-container"]}`}>
                    <div className={`${style["options-drop"]}`}>
                      {["List 1", "List 2", "Upload new CSV"].map(
                        (item, index) => {
                          return (
                            <div key={index} onClick={() => dropdown.click()}>
                              <OptionsText full text={item} />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                ))}
              </DropdownHOC>
            );
          case false:
            return (
              <>
                {showLoginButton ? (
                  <button
                    onClick={() => console.log("login pressed")}
                    className={`${style["button-loggin"]}`}
                  >
                    <img className={`${style["img-g-logo"]}`} src={Glogo} />
                    Login with google
                  </button>
                ) : (
                  <Fragment></Fragment>
                )}
              </>
            );
          default:
            return <></>;
        }
      })()}
      {showLoginButton ? (
        <button
          onClick={() => console.log("login pressed")}
          className={`${style["button-loggin"]}`}
        >
          <img className={`${style["img-g-logo"]}`} src={Glogo} />
          Login with google
        </button>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
};

export default NavBar;
