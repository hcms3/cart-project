import { Link } from "react-router-dom";

export default function ProductCard({ id, title, price, image, category }) {
    return (
        <div className="w-full shadow-lg">
            <img src={image} alt="" className="w-full h-72 object-contain p-3" />
            <div className="pb-1 px-2 flex flex-col gap-3">
                <Link to={"/"} className="text-md font-bold text-zinc-800 hover:underline min-h-10">{title}</Link>
                <p className="text-2xl text-green-800">R$ {price}</p>
                <button className="text-zinc-50 bg-green-600 py-2">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}