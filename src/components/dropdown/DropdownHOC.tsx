import React, { useEffect, useRef, useState } from "react";
import styled from "./dropdownHOC.module.css";

const DropdownHOC = ({
  children,
  triggerRef,
  classParent,
  dropMarginTop,
}: {
  children: JSX.Element[];
  triggerRef?: React.Ref<HTMLDivElement>;
  classParent?: string;
  dropMarginTop?: string;
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const containerDropHOC = useRef<HTMLDivElement>(null);

  const handleDropdown = (event: any) => {
    event.stopPropagation();
    return setOpenDropdown(!openDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      event.stopPropagation();
      if (
        containerDropHOC.current &&
        !containerDropHOC.current.contains(event.target)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styled["Father-class"]}  ${classParent}`}
      ref={containerDropHOC}
    >
      <div onClick={handleDropdown} ref={triggerRef}>
        {React.Children.toArray(children)[0]}
      </div>
      {openDropdown && (
        <div
          className={`${styled["Son-class"]} ${dropMarginTop} `}
          onClick={(event) => event.stopPropagation()}
        >
          {React.Children.toArray(children)[1]}
        </div>
      )}
    </div>
  );
};

export default DropdownHOC;
