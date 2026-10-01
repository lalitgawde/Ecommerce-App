import { Link } from "react-router-dom";
import styles from "./LoginRequired.module.css";
import { LockClosedIcon } from "@heroicons/react/24/outline";

function LoginRequired() {
  return (
    <div className={styles.loginRequired}>
      <div className={styles.loginLockIconContainer}>
        <LockClosedIcon className={styles.lockIcon} />
      </div>
      <p className={styles.loginRequiredText}>Login Required</p>
      <h2 style={{ fontSize:"24px", textTransform: "uppercase" , fontWeight: "bold" }}>This page is for members only</h2>
      <h2 className={styles.loginRequiredSubText}>
        You need to be logged in to access this page. Please log in or create an
        account to continue.
      </h2>
      <div className={styles.loginRequiredButton}>
        <Link to="/login" className={styles.loginButton}>
          Login
        </Link>
        <Link to="/signup" className={styles.registerButton}>
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default LoginRequired;
