import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  console.log(searchItem);

  /* const searchProduct = () => {
    let newProducts = [...products];
    if (searchItem.length >= 2) {


      newProducts.map((product) => {
        if (product.title.toLowerCase().includes(searchItem)) {
          newProducts = newProducts.filter((prod) => prod.id === product.id);
        }
      });
    }
    setProducts(newProducts);
  }; */
  const searchProduct = () => {
    let newProducts = [...products];
    if (searchItem && searchItem.length >= 2) {
      // Use filter to retain only products that match the condition

      const filteredProducts = newProducts.filter((product) =>
        product.title.toLowerCase().includes(searchItem)
      );
      newProducts = filteredProducts;
      setProducts(newProducts);
      navigate("/");
    } else {
      // If the searchItem is less than 2 characters, reset the products list
      alert("Enter more than 2 letters to enable search.");
    }
  };

  const updateCart = (item) => {
    let newCart = [...cart];
    let index = newCart.indexOf(item);

    if (cart.some((product) => product.id === item.id)) {
      newCart.splice(index, 1);
      setTotalPrice(totalPrice - item.price);
    } else {
      newCart.push(item);
      setTotalPrice(totalPrice + item.price);
    }
    setCart(newCart);
  };

  console.log("cart: ", cart);
  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        updateCart,
        totalPrice,
        setTotalPrice,
        setSearchItem,
        searchProduct,
      }}
    >
      <div className="p-10">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
