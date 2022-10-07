import "../styles/Cart.css";
import { useState, useEffect } from "react";

function Cart({ cart, updateCart }) {
  const items = Object.keys(cart);
  const total = items.reduce((acc, item) => acc + cart[item].amount * cart[item].price, 0);
  // "useState" renvoi 2 valeurs dans un tableau que nous récupérons avec cart et updateCart
  //Le 1er élément = valeur actuelle / Le 2ème élément est une fonction pour modifier la 1ere valeur
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    document.title = `LMJ : ${total}€`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ X {amount}
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
