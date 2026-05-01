import React, { useContext, useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductContext from "../../Context/ProductContextProvider";
import styles from "./ShoppingCategory.module.css";
import dropdown_icon from "../../assets/dropdown_icon.png";
import banner_men from "../../assets/banner_mens.png";
import banner_kids from "../../assets/banner_kids.png";
import banner_women from "../../assets/banner_women.png";
import Item from "../../Components/Item/Item";
import CardSkeletonLoader from "../../Loader/CardSkeletonLoader/CardSkeletonLoader";

function ShoppingCategory() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  console.log("category", category);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [sortDropdown, setSortDropdown] = useState({
    isOpen: false,
    value: "",
  });
  const [loadedTotalItems, setLoadedTotalItems] = useState(8);
  const { all_products } = useContext(ProductContext);

  useEffect(() => {
    setLoadedTotalItems(8);
  }, [category]);

  const category_product = all_products.filter(
    (product) => product.category === category.slice(0, category.length - 1),
  );

  const filter_products = category_product.slice(0, loadedTotalItems);

  const onLoadMoreHandler = () => {
    setLoadedTotalItems((prevValue) => prevValue + 5);
  };

  const memoriedProducts = useMemo(() => {
    let sorted_product = filter_products;
    if (sortDropdown.value !== "") {
      if (sortDropdown.value === "Price") {
        sorted_product = filter_products.sort(
          (a, b) => a.new_price - b.new_price,
        );
      } else {
        sorted_product = filter_products.sort((a, b) => a.name - b.name);
      }
    }
    return sorted_product;
  }, [filter_products, sortDropdown.value]);

  return (
    <div className={styles.shoppingCategory}>
      <img
        className={styles.bannerImg}
        src={
          category === "mens"
            ? banner_men
            : category === "women"
              ? banner_women
              : banner_kids
        }
        alt="banner category image"
      />
      <div className={styles.container}>
        <div className={styles.filters}>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Showing 1-{filter_products.length}
            </span>{" "}
            out of {all_products.length} products
          </p>
          <div style={{ position: "relative" }}>
            <button
              onClick={() =>
                setSortDropdown((prevValue) => ({
                  ...prevValue,
                  isOpen: !prevValue.isOpen,
                }))
              }>
              Sort by <img src={dropdown_icon} alt="dropdown Icon" />
            </button>
            {sortDropdown.isOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "90%",
                  right: "4px",
                  background: "#eee",
                  padding: "10px",
                  marginTop: "5px",
                  zIndex: "99",
                }}>
                <div
                  className={styles.dropdown_item}
                  onClick={() =>
                    setSortDropdown((prevValue) => ({
                      isOpen: !prevValue.isOpen,
                      value: "Name",
                    }))
                  }>
                  Product Name
                </div>
                <div
                  className={styles.dropdown_item}
                  onClick={() =>
                    setSortDropdown((prevValue) => ({
                      isOpen: !prevValue.isOpen,
                      value: "Price",
                    }))
                  }>
                  Product Price
                </div>
                {/* <div className={styles.dropdown_item}>Option 3</div> */}
              </div>
            )}
          </div>
        </div>
        {memoriedProducts.length > 0 ? (
          <div className={styles.category_product}>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <CardSkeletonLoader key={i} />
                ))
              : memoriedProducts.map((product) => (
                  <Item
                    key={product.id}
                    item={product}
                    to={`/product/${product.id}`}
                  />
                ))}
          </div>
        ) : (
          <p className={styles.message}>No Product Found</p>
        )}
        {loadedTotalItems < category_product.length ? (
          <div className={styles.loadMore_container}>
            <div></div>
            <button onClick={onLoadMoreHandler}>Explore More</button>
            <div></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ShoppingCategory;
