import React, { useEffect, useState } from "react";
import { navList } from "../../assets/data";
import styles from "./NavBar.module.css";
import Logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import UserContext from "../../Context/UserContextProvider";
import CartContext from "../../Context/CartContextProvider";

function NavBar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.split("/").length === 3
      ? location.pathname.split("/")[2][0].toUpperCase() +
          location.pathname.split("/")[2].slice(1)
      : "Shop",
  );
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = React.useContext(UserContext);
  const { cartLength } = React.useContext(CartContext);

  const handleTabClick = (item) => {
    setActiveTab(item);
    if (item === "Shop") {
      navigate("/");
    } else {
      navigate(`/shopping-category/${item.toLowerCase()}`);
    }
  };

  const handleClick = (item) => {
    if (item === "SHOPPER") {
      navigate("/");
      setActiveTab("Shop");
    } else if (item === "Cart") {
      navigate("/cart");
      setActiveTab("");
    } else if (item === "User") {
      navigate("/user");
    } else if (item === "Login") {
      navigate("/login");
      setActiveTab("");
    } else if (item === "Logout") {
      logout();
      navigate("/logout");
    }
  };

  useEffect(() => {
    const clickHandler = () => {
      if (isUserMenuOpen) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => handleClick("SHOPPER")}>
        <img src={Logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.navlist}>
        {navList.map((item) => {
          const classes = activeTab === item ? styles.active : "";
          return (
            <li className={styles.navItem} onClick={() => handleTabClick(item)}>
              <p>{item}</p>
              <div className={classes} />
            </li>
          );
        })}
      </ul>
      <div className={styles.header_actions}>
        {!isAuthenticated && (
          <button onClick={() => handleClick("Login")}>Login</button>
        )}
        <div className={styles.cartIcon} onClick={() => handleClick("Cart")}>
          <img src={cart} alt="cart" />
          <p className={styles.cartNumber}>{cartLength}</p>
        </div>
        {isAuthenticated && (
          <div
            className={styles.user}
            onClick={(e) => {
              e.stopPropagation();
              setIsUserMenuOpen(!isUserMenuOpen);
            }}>
            {user.user.username[0].toUpperCase()}
            {isUserMenuOpen && (
              <div className={styles.userActions}>
                <button onClick={() => handleClick("User")}>
                  <UserCircleIcon className={styles.icon} /> <span>User</span>
                </button>
                <button onClick={() => handleClick("Logout")}>
                  <ArrowRightStartOnRectangleIcon className={styles.icon} />{" "}
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
