import React from "react";
import styles from "./Footer.module.css";
import footer_logo from "../../assets/logo_big.png";
import inta_logo from "../../assets/instagram_icon.png";
import whatsapp_logo from "../../assets/whatsapp_icon.png";
import pinterest_logo from "../../assets/pintester_icon.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo} onClick={() => {}}>
        <img src={footer_logo} alt="Logo" />
        <p className={styles.para}>SHOPPER</p>
      </div>
      <ul className={styles.footer_links}>
        <li className={styles.footer_link}>Home</li>
        <li className={styles.footer_link}>Products</li>
        <li className={styles.footer_link}>About Us</li>
        <li className={styles.footer_link}>Contact</li>
      </ul>
      <div className={styles.footer_icons}>
        <img src={inta_logo} alt="Instagram" />
        <img src={whatsapp_logo} alt="WhatsApp" />
        <img src={pinterest_logo} alt="Pinterest" />
      </div>
      <hr className={styles.underline} />
      <p className={styles.copyright}>
        Copyright &copy; 2026. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
