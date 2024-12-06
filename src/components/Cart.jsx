import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart({ position, closeCart }) {

    const { cartItems } = useContext(CartContext)

    console.log(cartItems)

    return (
        <div className="fixed top-0 right-0 w-full h-screen max-w-md bg-zinc-700 duration-300 flex flex-col" style={{
            transform: `translateX(${position})`
        }}>
            <button className="text-zinc-50 w-full flex items-center py-2 px-5 gap-5 bg-emerald-600" onClick={closeCart}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <h2 className="text-2xl font-bold">Ocultar carrinho</h2>
            </button>
            <div className="py-5 px-3 w-full h-full bg-zinc-200 flex flex-col gap-3 overflow-auto">
                {cartItems.length === 0 && (
                    <div className="flex gap-3 items-center text-2xl text-zinc-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <h2>Carrinho vazio</h2>
                    </div>
                )}
                {cartItems.length !== 0 && (
                    cartItems.map((product, index) => {
                        return <ProductCart key={index} product={product} />
                    })
                )}
            </div>
            <Link to={"/"} className="py-3 px-5 text-3xl font-bold text-zinc-50 text-center bg-green-500">Finalizar compra</Link>
        </div>
    )
}