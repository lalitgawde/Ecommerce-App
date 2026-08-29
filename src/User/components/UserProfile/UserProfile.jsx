import { useState } from "react";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: "Deepak Sharma",
    email: "deepak.sharma@gmail.com",
    phone: "+91 98765 43210",
    dob: "1994-03-12",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Profile information</h2>
        <button
          className={styles.editButton}
          onClick={handleEditClick}
          disabled={isEditing}>
          {isEditing ? "Editing..." : "Edit"}
        </button>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.avatar}>D</div>
        <div className={styles.uploadSection}>
          <button className={styles.uploadButton}>Upload new photo</button>
          <span className={styles.fileInfo}>JPG or PNG, max 2 MB</span>
        </div>
      </div>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label>Full name</label>
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            readOnly={!isEditing}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.field}>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            readOnly={!isEditing}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.field}>
          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            readOnly={!isEditing}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.field}>
          <label>Date of birth</label>
          <input
            type="text"
            name="dob"
            value={userData.dob}
            readOnly={!isEditing}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {isEditing && (
        <div className={styles.saveButtonContainer}>
          <button
            className={styles.saveButton}
            onClick={() => setIsEditing(false)}>
            Save Changes
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
