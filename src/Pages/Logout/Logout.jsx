import styles from "./Logout.module.css";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRightIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

function Logout() {
  const location = useLocation();
  const account =
    location.state?.signedOutUser?.user ?? location.state?.signedOutUser;
  const name = account?.username ?? account?.name ?? "Your account";
  const email = account?.email;
  const initial = name === "Your account" ? "Y" : name.charAt(0).toUpperCase();

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.iconCircle} aria-hidden="true">
          <ArrowRightStartOnRectangleIcon className={styles.logoutIcon} />
        </div>
        <h1 className={styles.title}>You&apos;ve been signed out</h1>
        <p className={styles.description}>
          Your session on this device has ended. Your cart and wishlist are
          saved to your account.
        </p>

        <div className={styles.account}>
          <div className={styles.avatar} aria-hidden="true">
            {initial}
          </div>
          <div className={styles.accountDetails}>
            <span className={styles.accountName}>{name}</span>
            {email && <span className={styles.email}>{email}</span>}
          </div>
          <Link
            className={styles.signBackIn}
            to={ "/login"}
          >
            Sign back in <ArrowRightIcon className={styles.inlineIcon} />
          </Link>
        </div>

        <div className={styles.actions}>
          <Link
            className={styles.primaryButton}
            to={ "/login"}
          >
            SIGN IN AGAIN
          </Link>
          <Link className={styles.secondaryButton} to="/">
            Keep shopping
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Logout;
