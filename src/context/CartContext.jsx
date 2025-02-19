import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const haveItems = cartItems.find((item) => item.id === product.id);
    if (haveItems) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (product) => {
    const newArray = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newArray);
  };

  const incrementQuantity = (product) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const reduceQuantity = (product) => {
    const getItem = cartItems.find((cartItem) => cartItem.id === product.id);

    if (getItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        incrementQuantity,
        reduceQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
