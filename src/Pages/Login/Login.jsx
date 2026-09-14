import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../Context/UserContextProvider";
import Loader from "../../Loader/Spinner/Loader";
import { toast, ToastContainer } from "react-toastify";
import {
  HeartIcon,
  MapPinIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { BACKEND_URL } from "../../utils/constants";
import GoogleLoginButton from "./GoogleButton";

const LoginContent = [
  {
    icon: <TrashIcon className={styles.icon} />,
    title: "Track your orders",
    description: "See status and delivery updates for every order.",
  },
  {
    icon: <MapPinIcon className={styles.icon} />,
    title: "Saved addresses",
    description: "Check out faster with your home and office details.",
  },
  {
    icon: <HeartIcon className={styles.icon} />,
    title: "Your wishlist, everywhere",
    description: "Saved items follow you across devices.",
  },
  {
    icon: <TagIcon className={styles.icon} />,
    title: "Member-only pricing",
    description: "Extra discounts on selected styles every week.",
  },
];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${BACKEND_URL}/api/auth/local`,
          {
            identifier: username,
            password: password,
          },
        );
        console.log("Well done!", response);
        if (response.statusText === "OK") {
          login(response.data);
          navigate("/");
          setIsLoading(false);
        }
      } catch (error) {
        console.log("An error occurred:", error.message);
        setIsLoading(false);
        let message = `Login failed. Please check your credentials and try again.`;
        if (error.message.includes("Network Error")) {
          message = `Something Went Wrong. Please Check Your Network Connection.`;
        }
        toast.error(message, {
          position: "top-center",
        });
      }
    } else {
      toast.error(`Please fill in all fields.`, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <p className={styles.notSignedIn}>You're not signed in.</p>
          <h2 className={styles.leftTitle}>
            Sign in to see
            <br />
            your account
          </h2>
          <p className={styles.description}>
            Your orders, saved addresses and wishlist live in your SHOPPER
            account. Sign in to pick up where you left off.
          </p>
          <div className={styles.loginContent}>
            {LoginContent.map((item, index) => (
              <div key={index} className={styles.loginContentItem}>
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.loginContentText}>
                  <h3 className={styles.loginContentTitle}>{item.title}</h3>
                  <p className={styles.loginContentDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.card}>
          <form className={styles.form} onSubmit={onHandleSubmit}>
            <div className={styles.tabs}>
              <span className={styles.activeTab}>Sign in</span>
              <Link to="/signup">Create account</Link>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                alt={showPassword ? "hide password" : "show password"}
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}>
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>
            <div className={styles.inputRememberMeGroup}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <a href="#forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className={styles.button}>
              Sign in
            </button>
            <div className={styles.divider}>
              <span>or</span>
            </div>
            <GoogleLoginButton />
            <p className={styles.registerText}>
              Don't have an account ? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
