import React from "react";
import styles from "./SideBar.module.css";
import product_cart from "../../Admin_Assets/Product_Cart.svg";
import product_list_icon from "../../Admin_Assets/Product_list_icon.svg";
import user from "../../assets/user.png";
import delivery_man from "../../assets/delivery-man.png";

function SideBar({ handleItemClick, activeItem }) {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.lists}>
        <li
          className={`${styles.list_item} ${activeItem === "Add_Products" ? styles.active : ""}`}
          onClick={() => handleItemClick("Add_Products")}>
          <img src={product_cart} alt="Product Cart Icon" />
          <p>Add Products</p>
        </li>
        <li
          className={`${styles.list_item} ${activeItem === "Product_List" ? styles.active : ""}`}
          onClick={() => handleItemClick("Product_List")}>
          <img src={product_list_icon} alt="Product List Icon" />
          <p>Product List</p>
        </li>
        <li
          className={`${styles.list_item} ${activeItem === "Orders" ? styles.active : ""}`}
          onClick={() => handleItemClick("Orders")}>
          <img src={delivery_man} alt="Orders Icon" />
          <p>Orders</p>
        </li>
        <li
          className={`${styles.list_item} ${activeItem === "Customers" ? styles.active : ""}`}
          onClick={() => handleItemClick("Customers")}>
          <img src={user} alt="User Icon" />
          <p>Customers</p>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
