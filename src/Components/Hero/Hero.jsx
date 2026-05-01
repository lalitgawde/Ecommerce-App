import React from "react";
import hero_img from "../../assets/hero_image.png";
import styles from "./Hero.module.css";
// import hand_icon from "../../assets/hand_icon.png";

function Hero() {
  return (
    <div className={styles.hero_container}>
      <section className={styles.hero_left}>
        <h3 style={{ textTransform: "uppercase" }}>
          Discover the latest trends in fashion{" "}
        </h3>
        <p>Shop now and enjoy exclusive deals!</p>
        <button className={styles.hero_button}>Latest Collection</button>
      </section>
      <section className={styles.hero_right}>
        <img src={hero_img} alt="Hero Image" />
      </section>
    </div>
  );
}

export default Hero;
