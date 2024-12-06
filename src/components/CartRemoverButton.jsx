import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function CartRemoverButton({product}) {
    const { removeItem } = useContext(CartContext)
    return (
        <button className="text-zinc-800 px-3" onClick={() => removeItem(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    )
}