import React from "react";
import styles from "./Login.module.css";
import eyeIcon from "../../assets/eye.png";
import hidden from "../../assets/hidden.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../Context/UserContextProvider";
import Loader from "../../Loader/Spinner/Loader";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { login } = React.useContext(UserContext);
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
          "http://localhost:1337/api/auth/local",
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
        <div className={styles.card}>
          <form className={styles.form} onSubmit={onHandleSubmit}>
            <h2 className={styles.title}>Login</h2>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? hidden : eyeIcon}
                alt={showPassword ? "hide password" : "show password"}
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className={styles.inputRememberMeGroup}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className={styles.button}>
              Login
            </button>
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
