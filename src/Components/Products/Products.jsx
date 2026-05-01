import React from "react";
import styles from "./Products.module.css";
import Item from "../Item/Item";

function Products({ title, products_data }) {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_header}>
        <h2>{title}</h2>
        <div className={styles.underline}></div>
      </div>
      <ul className={styles.products}>
        {products_data.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default Products;
