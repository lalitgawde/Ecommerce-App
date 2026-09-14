import React, { useState } from "react";
import UserSideMenu from "./components/UserSideMenu";
import styles from "./UserPage.module.css";
import UserProfile from "./components/UserProfile/UserProfile";
import PasswordSecurity from "./components/PasswordSecurity/PasswordSecurity";
import Address from "./components/Address/Address";
import {
  ArchiveBoxIcon,
  CogIcon,
  HeartIcon,
  MapPinIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

const UserSideMenuOptions = [
  {
    label: "Profile",
    icon: <UsersIcon />,
    component: <UserProfile />,
  },
  {
    label: "Addresses",
    icon: <MapPinIcon />,
    component: <Address />,
  },
  {
    label: "Orders",
    icon: <ArchiveBoxIcon />,
    component: <div>Orders Content</div>,
  },
  {
    label: "Password & security",
    icon: <CogIcon />,
    component: <PasswordSecurity />,
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

function UserPage() {
  const [activeOption, setActiveOption] = useState("Profile");

  const activeItem = UserSideMenuOptions.find(
    (option) => option.label === activeOption,
  );

  return (
    <div className={styles.userPageContainer}>
      <UserSideMenu
        UserSideMenuOptions={UserSideMenuOptions}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <div className={styles.userPageContent}>
        {activeItem && activeItem.label !== "Logout" && activeItem.component}
      </div>
    </div>
  );
}

export default UserPage;
