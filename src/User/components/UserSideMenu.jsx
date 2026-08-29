import React from "react";
import styles from "./UserSideMenu.module.css";
import {
  ArchiveBoxIcon,
  HeartIcon,
  MapPinIcon,
  UsersIcon,
  ArrowRightOnRectangleIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const UserSideMenuOptions = [
  {
    label: "Profile",
    icon: <UsersIcon />,
  },
  {
    label: "Addresses",
    icon: <MapPinIcon />,
  },
  {
    label: "Orders",
    icon: <ArchiveBoxIcon />,
  },
  {
    label: "Password & security",
    icon: <CogIcon />,
  },
  {
    label: "Wishlist",
    icon: <HeartIcon />,
  },
  {
    label: "Logout",
    icon: <ArrowRightOnRectangleIcon />,
  },
];

function UserSideMenu({ activeOption, setActiveOption }) {
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    if (option.label === "Logout") {
      navigate("/logout");
    } else {
      // Handle other option clicks here
      setActiveOption(option.label);
    }
  };
  return (
    <div className={styles.userSideMenu}>
      <div className={styles.userSideMenuHeader}>
        <div className={styles.userSideMenuAvatar}>D</div>
        <div className={styles.userSideMenuUsername}>
          <p>Deepak Sharma</p>
          <p>Member since 2022</p>
        </div>
      </div>
      <ul className={styles.userSideMenuList}>
        {UserSideMenuOptions.map((option) => (
          <li
            key={option.label}
            className={`${
              activeOption === option.label ? styles.active : ""
            } ${styles.userSideMenuItem}`}
            onClick={() => handleOptionClick(option)}>
            <span className={styles.userSideMenuIcon}>{option.icon}</span>
            <span className={styles.userSideMenuLabel}>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserSideMenu;
