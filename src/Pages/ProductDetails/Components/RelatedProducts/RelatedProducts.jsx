import React from "react";
import styles from "./RelatedProducts.module.css";
import Item from "../../../../Components/Item/Item";
import data_product from "../../../../assets/data";

function RelatedProducts() {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_header}>
        <h2>Related Product</h2>
        <div className={styles.underline}></div>
      </div>
      <ul className={styles.products}>
        {data_product.map((item) => {
          return <Item key={item.id} item={item} to={`/product/${item.id}`} />;
        })}
      </ul>
    </div>
  );
}

export default RelatedProducts;
