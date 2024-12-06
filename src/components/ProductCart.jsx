import { useState } from "react"

export default function ProductCart({ product }) {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const reduceQuantity = () => {
        setQuantity(quantity - 1)
    }
    return (
        <div className="w-full flex justify-between bg-zinc-100">
            <div className="flex w-full">
                <img src={product.image} alt={product.title} className="w-full max-w-20 h-20" />
                <div className="py-1 px-3 flex flex-col gap-1">
                    <h2>{product.title}</h2>
                    <div className="text-zinc-500 text-xs flex items-center gap-5">
                        <p>Preço p/u: R$ {product.price}</p>
                        <div className="flex items-center gap-3">
                            <button onClick={reduceQuantity} className="hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </button>
                            <span>{quantity}</span>
                            <button onClick={incrementQuantity} className="hover:text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <h2>Total: R$ {product.price * quantity}</h2>
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