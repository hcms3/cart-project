import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([])

    const addToCart = () => {
        setCartItems([...cartItems, cartItems])
    }

    return <CartContext.Provider value={{cartItems, addToCart}} >{children}</CartContext.Provider>
}