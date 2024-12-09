import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const addToCart = (product) => {
        const haveItems = cartItems.find(item => item.id === product.id);
        if (haveItems) {
            console.log("Elemento existente");
            if (haveItems.id === product.id) {
                setCartItems(cartItems.map(item => {
                    return { ...item, quantity: haveItems.quantity + 1 }
                }))
            }
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const removeItem = (product) => {
        const newArray = cartItems.filter(item => item.id !== product.id);
        console.log(product.quantity)
        setCartItems(newArray)
    }

    return <CartContext.Provider value={{ cartItems, addToCart, removeItem }} >{children}</CartContext.Provider>
}