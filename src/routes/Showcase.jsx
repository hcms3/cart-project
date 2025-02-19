import { useState } from "react";
import ProductCard from "../components/ProductCard"
import { fetchApi } from "../lib/fetchApi"

export default function Showcase() {
    const { data, loading } = fetchApi("https://fakestoreapi.com/products");

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div>
            <div className="container flex justify-end py-5">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Encontre o produto..." type="text" className="border border-zinc-300 w-full max-w-lg py-1 px-2 rounded-sm text-zinc-800 outline-none" />
            </div>
            <div className="container w-full flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {data.filter(term => {
                    if (searchTerm == "") {
                        return term
                    }
                    else if (term.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return term
                    }
                }).map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            {!loading && (
                <div className="container grid grid-cols-1 sm:grid-cols-5 gap-5">
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                </div>
            )}
        </div>
    )
}