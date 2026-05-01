import React, { createContext } from "react";
import all_product from "../assets/all_product.js";

const ProductContext = createContext({ all_products: [] });

export function ProductContextProvider({ children }) {
  const contextValue = { all_products: all_product };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;
