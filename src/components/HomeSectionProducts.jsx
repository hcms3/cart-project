import { fetchApi } from "../lib/fetchApi";
import ProductCard from "./ProductCard";

export default function HomeSectionProducts(){
    const {data} = fetchApi("https://fakestoreapi.com/products");
    console.log(data)
    return(
        <section className="w-full grid grid-cols-4 gap-5">
            {data.slice(0,4).map(product => {
                return(
                    <ProductCard key={product.id} id={product.id} title={product.title} category={product.category} image={product.image} price={product.price} />
                )
            })}
        </section>
    )
}