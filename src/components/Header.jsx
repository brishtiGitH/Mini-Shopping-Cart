import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const Header = () => {
  const { setSearchItem, searchProduct } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between font-bold mb-5">
      <h1 className="text-3xl font-bold">Shopify</h1>
      <div className="search">
        <input
          onChange={(event) => setSearchItem(event.target.value.toLowerCase())}
          type="text"
          className="border-2 p-2"
          placeholder="search a product.."
        />
        <button onClick={searchProduct}>Search</button>
      </div>
      <ul className="flex justify-between gap-5">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
