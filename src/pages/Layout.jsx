import React from "react";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import classes from "./layout.module.css";

const Layout = ({ isLoading, error }) => {
  return (
    <main>
      {isLoading && <div className={classes.ring}></div>}
      {error && <p className={classes.errorMessage}>{error}</p>}
      <Main />
      <Footer />
    </main>
  );
};

export default Layout;
