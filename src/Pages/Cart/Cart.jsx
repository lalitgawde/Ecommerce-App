import React, { useContext } from "react";
import CartContext from "../../Context/CartContextProvider";

function Cart() {
  const { cartState, removeItemFromCart } = useContext(CartContext);
  console.log(cartState, "cartState");
  return (
    <div>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
