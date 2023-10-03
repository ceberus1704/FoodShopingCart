import { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartActive, setCartActive] = useState(false)

  const showCartHandler = () => {
    setCartActive(true)
  }

  const closeCartHandler = () => {
    setCartActive(false)
  }

  return (
    <CartProvider>
      {cartActive && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
