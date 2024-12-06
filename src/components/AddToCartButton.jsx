import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function AddToCartButton() {
    const {addToCart} = useContext(CartContext)
    return (
        <button className="text-zinc-50 bg-green-600 py-2" onClick={addToCart}>Adicionar ao carrinho</button>
    )
}