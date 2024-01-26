import React from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "../components";

function Cart() {
  // const cartItems = useSelector((state) => state.cart.value)
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="container w-full mx-auto flex flex-wrap py-2 px-2  justify-center gap-4">
      {cartItems.map((item) => <CartProduct name={item.name} image={item.image} price={item.price} id={item.id} /> )}
    </div>
  );
}

export default Cart;
