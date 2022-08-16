import React from "react";
import "../asset/styles/components/header.scss";


type headerProps = {
  headerTitle : string;
  children : React.ReactNode
}
function Header({headerTitle, children} : headerProps) {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          {" "}
          <div className="header__right">
            <h4>{headerTitle}</h4>
          </div>
          <div className="header__left">
            {children}
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;
