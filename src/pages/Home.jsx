import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../App";
import ProductItem from "../components/ProductItem";
//https://fakestoreapi.com/products
const Home = () => {
  const { products, setProducts } = useContext(GlobalContext);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    if (data) {
      setProducts(data);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          {products.map((product) => (
            <ProductItem item={product} />
          ))}
        </div>
      ) : (
        <h1 className="font-semibold font-2xl text-center">
          No products found.
        </h1>
      )}
    </div>
  );
};

export default Home;
