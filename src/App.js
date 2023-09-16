import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Music from "./components/Items/Music";
import Merch from "./components/Items/Merch";
import CartButton from "./components/CartButton";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Heading></Heading>
      <Music></Music>
      <Merch></Merch>
      <CartButton></CartButton>
      <Footer></Footer>
    </>
  );
}

export default App;
