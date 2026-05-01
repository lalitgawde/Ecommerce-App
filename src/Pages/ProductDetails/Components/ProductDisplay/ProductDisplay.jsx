import React, { useState } from "react";
import styles from "./ProductDisplay.module.css";
import star_icon from "../../../../assets/star_icon.png";
import star_dull_icon from "../../../../assets/star_dull_icon.png";

function ProductDisplay({ product }) {
  const [size, setSize] = useState("");
  return (
    <div className={styles.productDisplay}>
      <div className={styles.productDisplay_left_side}>
        <div className={styles.image_list}>
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
        </div>
        <div className={styles.product_image}>
          <img src={product.image} alt="product image" />
        </div>
      </div>
      <div className={styles.productDisplay_right_side}>
        <h2>{product.name}</h2>
        <div className={styles.rating}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>(152)</span>
        </div>
        <p className={styles.product_item_price}>
          <span className={styles.product_item_new_price}>
            ${product.new_price}
          </span>
          <span className={styles.product_item_old_price}>
            ${product.old_price}
          </span>
        </p>
        <p className={styles.description}>
          {product.description ??
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves,worn as an undershirt or outer garment."}
        </p>
        <div className={styles.size_section}>
          <h3>Select Size</h3>
          <div className={styles.sizes}>
            <span
              onClick={() => setSize("S")}
              className={size === "S" ? styles.active : styles.sizes_span}>
              S
            </span>
            <span
              onClick={() => setSize("M")}
              className={size === "M" ? styles.active : styles.sizes_span}>
              M
            </span>
            <span
              onClick={() => setSize("L")}
              className={size === "L" ? styles.active : styles.sizes_span}>
              L
            </span>
            <span
              onClick={() => setSize("XL")}
              className={size === "XL" ? styles.active : styles.sizes_span}>
              XL
            </span>
            <span
              onClick={() => setSize("XXL")}
              className={size === "XXL" ? styles.active : styles.sizes_span}>
              XXL
            </span>
          </div>
        </div>
        <p className={styles.meta}>
          <strong>Category :</strong>{" "}
          <span>
            {product.category[0].toUpperCase() + product.category.slice(1)}
          </span>
        </p>
        <button className={styles.add_to_cart}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
