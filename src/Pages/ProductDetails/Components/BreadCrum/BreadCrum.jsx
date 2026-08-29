import React from "react";
import styles from "./BreadCrum.module.css";
import breadcrum_arrow from "../../../../assets/breadcrum_arrow.png";

function BreadCrum({ product }) {
  console.log("product", product);
  return (
    <div className={styles.bread_crum}>
      <span>HOME</span>
      <img src={breadcrum_arrow} />
      <span>SHOP</span>
      <img src={breadcrum_arrow} />
      <span>
        {/* {product.category[0].toUpperCase() + product.category.slice(1)} */}
        {product.category.toUpperCase()}
      </span>
      <img src={breadcrum_arrow} />
      <span>{product.name.toUpperCase()}</span>
    </div>
  );
}

export default BreadCrum;
