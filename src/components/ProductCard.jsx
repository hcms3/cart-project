import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
    return (
        <div className="w-full shadow-lg">
            <img src={product.image} alt="" className="w-full h-72 object-contain p-3" />
            <div className="pb-1 px-2 flex flex-col gap-3">
                {product.title.length >= 35 && (
                    <Link to={"/showcase/" + product.id} className="text-md font-bold text-zinc-800 hover:underline min-h-10">
                        {product.title.substr(0, 35)}...
                    </Link>
                )}
                {product.title.length < 35 && (
                    <Link to={"/showcase/" + product.id} className="text-md font-bold text-zinc-800 hover:underline min-h-10">
                        {product.title}
                    </Link>
                )}
                <p className="text-2xl text-green-800">R$ {product.price.toFixed(2)}</p>
                <AddToCartButton product={product} />
            </div>
        </div>
    )
}