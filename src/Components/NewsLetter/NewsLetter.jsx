import { useContext, useState } from "react";
import styles from "./NewsLetter.module.css";
import axios from "axios";
import UserContext from "../../Context/UserContextProvider";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../Loader/Spinner/Loader";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, logout } = useContext(UserContext);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onClickHandler = async () => {
    console.log("Email submitted:", email);
    if (user) {
      if (email) {
        try {
          setIsLoading(true);
          const res = await axios.post(
            `http://localhost:1337/api/news-letters`,
            {
              data: {
                newsletter_email: email,
                subscriber_status: "Active",
                users_permissions_user: user.user.documentId,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${user.jwt}`,
              },
            },
          );
          setIsLoading(false);
          console.log("res", res);
          if (res.data.data.documentId) {
            toast.success(`Subscribe to Newsletter successfully!`, {
              position: "top-center",
            });
            setEmail("");
          }
        } catch (err) {
          console.log("err", err);
          setIsLoading(false);
          toast.error(`Subscribe to Newsletter Failed`, {
            position: "top-center",
          });
        }
      }
    } else {
      logout();
    }
  };

  return (
    <div className={styles.newsletter}>
      {isLoading && <Loader />}
      <ToastContainer />
      <h2>Get exclusive offers on your email</h2>
      <div className={styles.newsletter_subscribe}>
        <p>
          Subscribe to get updates about our latest shop and special offers.
        </p>
        <div className={styles.newsletter_input}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={onChange}
          />
          <button onClick={onClickHandler}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
