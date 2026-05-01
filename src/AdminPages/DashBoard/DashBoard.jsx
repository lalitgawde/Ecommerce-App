import React from "react";
import styles from "./DashBoard.module.css";
import SideBar from "../../Components/SideBar/SideBar";
import AddProduct from "../AddProduct/AddProduct";

function DashBoard() {
  const [activeItem, setActiveItem] = React.useState("Add_Products");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={styles.dashboard}>
      <SideBar handleItemClick={handleItemClick} activeItem={activeItem} />
      <div className={styles.content}>
        {activeItem === "Add_Products" && <AddProduct />}
      </div>
    </div>
  );
}

export default DashBoard;
