import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Spinner/Loader";
import { toast, ToastContainer } from "react-toastify";
import { BACKEND_URL } from "../../utils/constants";
import UserContext from "../../Context/UserContextProvider";

function GoogleRedirect() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  useEffect(() => {
    const handleGoogleRedirect = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get("access_token");
        if (!accessToken) {
          throw new Error(
            "Google authentication failed. Access token missing.",
          );
        }
        const response = await fetch(
          `${BACKEND_URL}/api/auth/google/callback?access_token=${encodeURIComponent(
            accessToken,
          )}`,
        );
        if (!response.ok) {
          throw new Error("Failed to authenticate with Strapi.");
        }
        const data = await response.json();
        console.log("Google login response:", data);
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        login(data);
        navigate("/");
      } catch (error) {
        toast.error("Google login failed. Please try again.");
      }
    };

    handleGoogleRedirect();
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ToastContainer />
      <Loader />
      <p style={{ textAlign: "center" }}>Signing you in. Please wait...</p>
    </div>
  );
}

export default GoogleRedirect;
