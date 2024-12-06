import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems([...cartItems, product])
    }

    const removeItem = (product) => {
        const newArray = cartItems.filter(item => item.id !== product.id);
        console.log(product)
        setCartItems(newArray)
    }

    return <CartContext.Provider value={{cartItems, addToCart, removeItem}} >{children}</CartContext.Provider>
}