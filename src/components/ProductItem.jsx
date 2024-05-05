import React, { useContext } from "react";
import { GlobalContext } from "../App";

const ProductItem = ({ item }) => {
  const { updateCart, cart } = useContext(GlobalContext);
  return (
    <div className="flex flex-col gap-5 border-2 rounded-md cursor-pointer p-10 h-auto">
      <div className="image w-full h-[80%]">
        <img
          className="object-cover w-full h-full"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="text-xl font-bold ">${item.price}</div>
      <div className="title font-semibold">{item.title}</div>
      <button
        onClick={() => updateCart(item)}
        className="bg-yellow-500 py-2 px-3 rounded-md font-semibold "
      >
        {cart.some((prod) => item.id === prod.id)
          ? "Remove from Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductItem;
