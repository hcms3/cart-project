import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart({ position, closeCart }) {

    const {cartItems} = useContext(CartContext)

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
                {cartItems.length === 0 && <h2>Carrinho vazio</h2>}
                {cartItems.length !== 0 && cartItems.map(product => {
                    return <ProductCart />
                })}
            </div>
            <Link to={"/"} className="py-3 px-5 text-3xl font-bold text-zinc-50 text-center bg-green-500">Finalizar compra</Link>
        </div>
    )
}