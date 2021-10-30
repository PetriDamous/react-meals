import React from "react";

import classes from "./styles/header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_shit}>Logo</div>
      <div>Cart</div>
    </header>
  );
};

export default Header;
