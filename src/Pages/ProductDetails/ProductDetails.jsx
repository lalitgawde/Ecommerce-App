import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import ProductContext from "../../Context/ProductContextProvider";
import BreadCrum from "./Components/BreadCrum/BreadCrum";
import RelatedProducts from "./Components/RelatedProducts/RelatedProducts";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

function ProductsDetails() {
  const { all_products } = useContext(ProductContext);
  const { id } = useParams();

  const product = all_products.filter((product) => product.id === Number(id));

  return (
    <div className={styles.productDetailsContainer}>
      <BreadCrum product={{ ...product[0] }} />
      <ProductDisplay product={{ ...product[0] }} />
      <RelatedProducts />
    </div>
  );
}

export default ProductsDetails;
