import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { airplants } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount ,deleteitem} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
 
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {airplants.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
                navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
     
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
