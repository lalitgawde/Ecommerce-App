import React from "react";
import styles from "./CardSkeletonLoader.module.css";

function CardSkeletonLoader() {
  return (
    <div className={` ${styles.product_item}`}>
      <div className={`${styles.cardSkeleton} ${styles.product_item_img}`} />
      <div className={`${styles.cardSkeleton} ${styles.product_item_name}`} />
      <p className={`${styles.product_item_price}`}>
        <div
          className={`${styles.cardSkeleton} ${styles.product_item_new_price}`}
        />
        <div
          className={`${styles.cardSkeleton} ${styles.product_item_old_price}`}
        />
      </p>
    </div>
  );
}

export default CardSkeletonLoader;
