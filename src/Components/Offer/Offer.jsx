import React from "react";
import exclusive_img from "../../assets/exclusive_image.png";
import styles from "./Offer.module.css";
// import hand_icon from "../../assets/hand_icon.png";

function Offer() {
  return (
    <div className={styles.offer_container}>
      <section className={styles.offer_left}>
        <h3 style={{ textTransform: "uppercase" }}>
          Exclusive Offer: Get 20% Off on Your First Purchase!
        </h3>
        <p style={{ textTransform: "uppercase" }}>
          Only on best popular product!
        </p>
        <button className={styles.offer_button}>Check Now</button>
      </section>
      <section className={styles.offer_right}>
        <img src={exclusive_img} alt="Offer Image" />
      </section>
    </div>
  );
}

export default Offer;
