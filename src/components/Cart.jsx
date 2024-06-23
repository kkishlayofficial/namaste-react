import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  console.log(cartItems.length, "Cart")
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-xl text-center my-3">Cart</h1>
      <button className="border border-black p-3 my-3 items-start" onClick={handleClearCart}> Clear Cart</button>
      {cartItems.map((item) => {
        return <RestaurantMenuCard cart={true} key={item?.id} item={item} />;
      })}
    </div>
  );
};

export default Cart;
