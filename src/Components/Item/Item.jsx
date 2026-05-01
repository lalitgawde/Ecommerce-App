import React from "react";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

function Item({ item, to = "" }) {
  return (
    <Link to={to} className={styles.link}>
      <li
        key={item.id}
        className={styles.product_item}
        onClick={() => {
          window.scrollTo(0, 0);
        }}>
        <img src={item.image} alt={item.name} />
        <p className={styles.product_item_name}>{item.name}</p>
        <p className={styles.product_item_price}>
          <span className={styles.product_item_new_price}>
            ${item.new_price}
          </span>
          <span className={styles.product_item_old_price}>
            ${item.old_price}
          </span>
        </p>
      </li>
    </Link>
  );
}

export default Item;
