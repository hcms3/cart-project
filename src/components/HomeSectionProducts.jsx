import { fetchApi } from "../lib/fetchApi";
import ProductCard from "./ProductCard";

export default function HomeSectionProducts(){
    const {data, loading} = fetchApi("https://fakestoreapi.com/products");
    return(
        <section className="w-full grid grid-cols-4 gap-5">
            {data.slice(0,4).map(product => {
                return(
                    <ProductCard key={product.id} product={product} />
                )
            })}
            {!loading && (
                <div className="grid grid-cols-4 col-span-4 gap-5">
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                </div>
            )}
        </section>
    )
}