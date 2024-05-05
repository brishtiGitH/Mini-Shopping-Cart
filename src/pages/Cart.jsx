import React, { useContext } from "react";
import { GlobalContext } from "../App";
import ProductItem from "../components/ProductItem";

const Cart = () => {
  const { cart, totalPrice } = useContext(GlobalContext);

  return (
    <div className="h-auto">
      <h1 className="text-2xl font-semibold text-center ">Shopping Cart</h1>
      <div className="flex flex-col  gap-2 md:flex-row md:gap-5">
        {cart && cart.length > 0 ? (
          <div className="grid grid-cols-1 w-[80%] md:grid-cols-2 lg:grid-cols-3 md:w-[60%] gap-10 ">
            {cart.map((product) => (
              <ProductItem item={product} />
            ))}
          </div>
        ) : (
          <div className="font-bold text-2xl text-center">Cart is empty!</div>
        )}

        {cart && cart.length > 0 && (
          <div className="cartDetails w-[100%] md:w-[40%] flex flex-col gap-3 ">
            <h3 className="font-semibold">Add address:</h3>
            <input
              type="text"
              placeholder="enter your address"
              className="border-2 w-full p-2"
            />
            <h3 className="font-semibold">Order Summary:</h3>
            {cart.map((prod) => (
              <li className="list-none">{prod.title}</li>
            ))}
            <h3 className="font-semibold">Order Total:</h3>
            <p className="font-semibold text-xl">${totalPrice}</p>
            <button
              onClick={() => alert("Order placed!")}
              className="bg-yellow-500 py-2 px-3 font-semibold rounded-md"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
