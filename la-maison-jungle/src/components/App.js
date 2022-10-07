import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/Layout.css";
import { useState, useEffect } from "react";

function App() {
  //savedCart oerlet de regarder ce qu'il y a dans le localStorage => mes plantes
  const savedCart = localStorage.getItem("Mes plantes");
  // ici useState (valeur par defaut) renvoi soit le contenu du localstorage si il y a une plnate ou plus SINON renvoi un tableau vide
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  //lorsuqu'il y a un changement du panier => applique la fonction setItem qui permet de mettre mon panier dans le localStorage
  useEffect(() => {
    localStorage.setItem("Mes plantes", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
