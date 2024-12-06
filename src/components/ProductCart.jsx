import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ProductCart() {
    const {cartItems} = useContext(CartContext)

    console.log(cartItems)
    return (
        <div className="w-full flex justify-between bg-zinc-100">
            <div className="flex w-full">
            <img src="" alt="" className="w-full max-w-20 h-20" />
            <div className="py-1 px-3 flex flex-col gap-1">
                <h2>Nome do produto</h2>
                <div className="text-zinc-500 text-xs flex gap-5">
                    <p className="">Quantidade: 3</p>
                    <p>Valor p/u: R$ 00,00</p>
                </div>
                <h2>Total: R$ 00,00</h2>
            </div>
            </div>
            <button className="text-zinc-800 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}