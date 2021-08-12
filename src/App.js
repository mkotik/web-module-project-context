import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((cur) => {
        return cur.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, removeItem }}>
        <Navigation cart={cart} />

        <ProductContext.Provider value={{ products, addItem }}>
          <Route exact path="/">
            <Products />
          </Route>
        </ProductContext.Provider>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </CartContext.Provider>
    </div>
  );
}

export default App;
