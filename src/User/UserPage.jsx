import React, { useState } from "react";
import UserSideMenu from "./components/UserSideMenu";
import styles from "./UserPage.module.css";
import UserProfile from "./components/UserProfile/UserProfile";
import PasswordSecurity from "./components/PasswordSecurity/PasswordSecurity";

function UserPage() {
  const [activeOption, setActiveOption] = useState("Profile");

  return (
    <div className={styles.userPageContainer}>
      <UserSideMenu
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <div className={styles.userPageContent}>
        {activeOption === "Profile" && <UserProfile />}
        {activeOption === "Addresses" && <div>Addresses Content</div>}
        {activeOption === "Orders" && <div>Orders Content</div>}
        {activeOption === "Password & security" && <PasswordSecurity />}
      </div>
    </div>
  );
}

export default UserPage;
