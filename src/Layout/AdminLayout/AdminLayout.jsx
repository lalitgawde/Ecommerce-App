import React from "react";
import styles from "./AdminLayout.module.css";
import Logo from "../../assets/logo.png";
import nav_profile from "../../Admin_Assets/nav-profile.svg";
import { Link, useLocation } from "react-router-dom";

function AdminLayout({ children }) {
  const [isAdminMenuOpen, setIsAdminMenuOpen] = React.useState(false);
  const location = useLocation();

  const isAdminPath =
    location.pathname === "/admin/login" ||
    location.pathname === "/admin/logout";

  console.log("isAdminPath", isAdminPath);
  return (
    <div className={styles.layout}>
      {!isAdminPath && (
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
            <div className={styles.logoName}>
              <h3>SHOPPER</h3>
              <p>Admin Panel</p>
            </div>
          </div>
          <div className={styles.userInfo}>
            <img
              src={nav_profile}
              alt="User"
              onClick={() => setIsAdminMenuOpen((isOpen) => !isOpen)}
            />
            {isAdminMenuOpen && (
              <div className={styles.userActions}>
                <button>
                  <Link to="/admin/logout" style={{ textDecoration: "none" }}>
                    Logout
                  </Link>
                </button>
              </div>
            )}
          </div>
        </header>
      )}
      {children}
    </div>
  );
}

export default AdminLayout;
