import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const location = useLocation();
  console.log(location);

  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/logout";

  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;
