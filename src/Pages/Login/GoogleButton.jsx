import { BACKEND_URL } from "../../utils/constants";
import styles from "./GoogleButton.module.css";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    window.location.href = `${BACKEND_URL}/api/connect/google`;
  };

  return (
    <button
      type="button"
      className={styles.socialButton}
      onClick={handleGoogleLogin}
    >
      <strong className={styles.googleIcon}>G</strong> Continue with Google
    </button>
  );
}

export default GoogleLoginButton;
