import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ id, title, price, image, category }) {
    return (
        <div className="w-full shadow-lg">
            <img src={image} alt="" className="w-full h-72 object-contain p-3" />
            <div className="pb-1 px-2 flex flex-col gap-3">
                {title.length >= 35 && (
                    <Link to={"/showcase/" + id} className="text-md font-bold text-zinc-800 hover:underline min-h-10">
                        {title.substr(0, 35)}...
                    </Link>
                )}
                {title.length < 35 && (
                    <Link to={"/showcase/" + id} className="text-md font-bold text-zinc-800 hover:underline min-h-10">
                        {title}
                    </Link>
                )}
                <p className="text-2xl text-green-800">R$ {price.toFixed(2)}</p>
                <AddToCartButton />
            </div>
        </div>
    )
}