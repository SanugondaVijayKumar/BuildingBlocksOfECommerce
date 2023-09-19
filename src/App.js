import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Music from "./components/Items/Music";
import Merch from "./components/Items/Merch";
import CartButton from "./components/CartButton";
import Cart from "./components/Cart/Cart";

import Footer from "./components/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showingTheCartHandler = (props) => {
    setShowCart(true);
  };

  const hidingTheCartHandler = (props) => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onClose={hidingTheCartHandler}></Cart>}
      <NavBar clicking={showingTheCartHandler} />
      <Heading></Heading>
      <Music></Music>
      <Merch></Merch>
      <CartButton></CartButton>
      <Footer></Footer>
    </>
  );
}

export default App;
