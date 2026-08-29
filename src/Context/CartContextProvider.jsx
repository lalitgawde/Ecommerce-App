import React, { createContext, useReducer } from "react";

const initialState = {
  cartItems: [],
  cartLength: 0,
};

const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = action.payload;
    console.log(newItem, "newItem");
    const existingItem = state.cartItems.find((item) => item.id === newItem.id);
    let updatedItems;
    if (!existingItem) {
      updatedItems = [
        ...state.cartItems,
        {
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        },
      ];
    } else {
      updatedItems = state.cartItems.map((item) =>
        item.id === newItem.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + newItem.price,
            }
          : item,
      );
    }
    return {
      ...state,
      cartItems: updatedItems,
      cartLength: updatedItems.length,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const removeItemId = action.payload;
    const existingItem = state.cartItems.find(
      (item) => item.id === removeItemId,
    );
    let updatedItems = [];
    if (existingItem.quantity === 1) {
      updatedItems = state.cartItems.filter((item) => item.id !== removeItemId);
    } else {
      updatedItems = state.cartItems.map((item) =>
        item.id === removeItemId
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            }
          : item,
      );
    }
    return {
      ...state,
      cartItems: updatedItems,
      cartLength: updatedItems.length,
    };
  }
  return state;
};

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  console.log(cartState, "cartState");

  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const replaceCart = (data) => {
    dispatch({ type: "REPLACE_CART", payload: data });
  };

  const value = {
    cartState,
    cartLength: cartState.cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0,
    ),
    addItemToCart,
    removeItemFromCart,
    replaceCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
