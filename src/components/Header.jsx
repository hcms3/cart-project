import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

export default function Header() {
    const [position, setPosition] = useState("100%")

    const activeOrDesactiveCart = () => {
        position === "100%" ? setPosition("0%") : setPosition("100%")
    }
    return (
        <header className="bg-slate-700">
            <div className="container max-w-5xl">
                <h2 className="py-5 text-center text-zinc-50 text-2xl font-bold">E-commerce simulator</h2>
            </div>
            <nav className="bg-zinc-200 py-2">
                <div className="container">
                    <ul className="flex justify-between items-center">
                        <div className="flex gap-5">
                            <li><Link to={"/"}>Página inicial</Link></li>
                            <li><Link to={"/showcase"}>Vitrine</Link></li>
                        </div>
                        <li>
                            <button onClick={activeOrDesactiveCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <Cart position={position} closeCart={activeOrDesactiveCart} />
        </header>
    )
}