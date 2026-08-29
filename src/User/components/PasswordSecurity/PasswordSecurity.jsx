import { useState } from "react";
import styles from "./PasswordSecurity.module.css";

const PasswordSecurity = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.passwordSection}>
          <h2>Change password</h2>
          <div className={styles.fieldGroup}>
            <label>Current password</label>
            <input type="password" value="******" readOnly />
          </div>
          <div className={styles.fieldGroup}>
            <label>New password</label>
            <input type="password" placeholder="At least 8 characters" />
          </div>
          <div className={styles.fieldGroup}>
            <label>Confirm new password</label>
            <input type="password" placeholder="Repeat new password" />
          </div>
          <button className={styles.updateButton}>Update password</button>
        </div>
      </div>
      <div className={styles.card + " " + styles.toggleCard}>
        <div className={styles.toggleHeader}>
          <div>
            <h3>Two-factor authentication</h3>
            <p>Get a verification code by SMS when signing in.</p>
          </div>
          <button
            type="button"
            className={`${styles.toggleButton} ${
              twoFactorEnabled ? styles.enabled : ""
            }`}
            onClick={() => setTwoFactorEnabled((prev) => !prev)}
            aria-label="Toggle two-factor authentication">
            <span className={styles.toggleThumb} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSecurity;
