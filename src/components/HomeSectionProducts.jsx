import { fetchApi } from "../lib/fetchApi";
import ProductCard from "./ProductCard";

export default function HomeSectionProducts(){
    const {data, loading} = fetchApi("https://fakestoreapi.com/products");
    return(
        <section className="w-full flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {data.slice(0,4).map(product => {
                return(
                    <ProductCard key={product.id} product={product} />
                )
            })}
            {!loading && (
                <div className="w-full flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-5 col-span-4">
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                    <div className="w-full h-96 bg-zinc-300 animate-pulse"></div>
                </div>
            )}
        </section>
    )
}