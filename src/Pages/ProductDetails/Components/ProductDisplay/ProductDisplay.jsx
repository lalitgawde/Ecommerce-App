import React, { useState, useContext } from "react";
import styles from "./ProductDisplay.module.css";
import star_icon from "../../../../assets/star_icon.png";
import star_dull_icon from "../../../../assets/star_dull_icon.png";
import { sizeArray } from "../../../../assets/data";
import CartContext from "../../../../Context/CartContextProvider";

function ProductDisplay({ product }) {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);
  const addItem = (product) => {
    const item = {
      ...product,
      quantity: quantity,
      size: size,
    };
    addItemToCart({ type: "ADD_ITEM", payload: item });
  };

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
        <div className={styles.size_quantity_section}>
          <div className={styles.size_section}>
            <h3>Select Size</h3>
            <div className={styles.sizes}>
              {sizeArray.map((s) => (
                <span
                  key={s}
                  onClick={() => setSize(s)}
                  className={`${size === s ? styles.active : styles.sizes_span}`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.quantity_section}>
            <h3>Quantity</h3>
            <div className={styles.quantity}>
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
        </div>
        <p className={styles.meta}>
          <strong>Category :</strong>{" "}
          <span>
            {product.category[0].toUpperCase() + product.category.slice(1)}
          </span>
        </p>
        <button className={styles.add_to_cart} onClick={() => addItem(product)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
