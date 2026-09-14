import { useContext, useState } from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../Context/UserContextProvider";
import Loader from "../../Loader/Spinner/Loader";
import { toast, ToastContainer } from "react-toastify";
import { BACKEND_URL } from "../../utils/constants";
import {
  BoltIcon,
  HeartIcon,
  MapPinIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import GoogleLoginButton from "../Login/GoogleButton";

const benefits = [
  {
    icon: BoltIcon,
    title: "Faster checkout",
    text: "Saved addresses and payment details.",
  },
  {
    icon: MapPinIcon,
    title: "Order tracking",
    text: "Live delivery updates on every order.",
  },
  {
    icon: HeartIcon,
    title: "Wishlist sync",
    text: "Saved items on all your devices.",
  },
  {
    icon: ArrowPathIcon,
    title: "Easy returns",
    text: "Start a return in two taps, 30-day window.",
  },
];

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.", { position: "top-center" });
      return;
    }
    if (!acceptedTerms) {
      toast.error("Please agree to the Terms of Service and Privacy Policy.", {
        position: "top-center",
      });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", { position: "top-center" });
      return;
    }
    if (firstName && password) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${BACKEND_URL}/api/auth/local/register`,
          {
            username: `${firstName} ${lastName}`,
            email: email,
            password: password,
          },
        );
        if (response.statusText === "OK") {
          login(response.data);
          navigate("/");
          setIsLoading(false);
        }
      } catch (error) {
        console.log("An error occurred:", error.response);
        setIsLoading(false);
        let message = `Something Went Wrong. Please Check Your Network Connection.`;
        toast.error(message, {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer />
      <main className={styles.container}>
        <section className={styles.content}>
          <div className={styles.headingBlock}>
            <p className={styles.eyebrow}>Create your account</p>
            <h1 className={styles.title}>Join SHOPPER</h1>
            <p className={styles.subtitle}>
              One account for your orders, addresses and wishlist. It takes
              about a minute.
            </p>
          </div>
          <div className={styles.card}>
            <form className={styles.form} onSubmit={onHandleSubmit}>
              <div className={styles.fieldGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Deepak"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Sharma"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="mobile">Mobile number</label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="+91 98765 43210"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="At least 8 characters"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className={styles.showPassword}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Repeat password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <p className={styles.passwordHint}>
                Use 8+ characters with a mix of letters and numbers
              </p>
              <div className={styles.checkGroup}>
                <label>
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />{" "}
                  <span>
                    I agree to the <a href="#terms">Terms of Service</a> and{" "}
                    <a href="#privacy">Privacy Policy</a>.
                  </span>
                </label>
              </div>
              <div className={styles.socialButtons}>
                <button type="submit" className={styles.button}>
                  Create account
                </button>
                <GoogleLoginButton />
              </div>
              <p className={styles.registerText}>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </section>
        <aside className={styles.sidebar}>
          <div className={styles.benefitCard}>
            <h2>What you get</h2>
            {benefits.map(({ icon: Icon, title, text }) => (
              <div className={styles.benefit} key={title}>
                <span className={styles.benefitIcon}>
                  <Icon />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </div>
            ))}
          </div>
          <p className={styles.privacyNote}>
            We never share your details. You can delete your account at any time
            from Password &amp; security.
          </p>
        </aside>
      </main>
    </>
  );
}

export default SignUp;
