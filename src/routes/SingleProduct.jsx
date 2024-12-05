import { useParams } from "react-router-dom"
import { fetchApi } from "../lib/fetchApi"
import HomeSectionProducts from "../components/HomeSectionProducts";

export default function SingleProduct() {

    const router = useParams()

    const { id } = router;

    const { data } = fetchApi("https://fakestoreapi.com/products/" + id)

    const { id: productId, title, description, category, price, image, rating } = data;

    return (
        <section className="min-h-screen w-full bg-zinc-50">
            <div className="container max-w-5xl grid grid-cols-2 gap-5 py-8">
                <img src={image} alt="" className="max-w-sm" />
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl font-bold text-zinc-800">{title}</h2>
                        <p className="text-zinc-500">Categoria: {category}</p>
                        <p className="py-1 px-3 bg-indigo-300">SKU: {productId}</p>
                        <h5 className="text-lg text-zinc-700 font-thin">{description}</h5>
                        <h2 className="text-3xl font-bold text-green-600">R$ {price}</h2>
                    </div>
                    <button className="w-full bg-green-500 text-zinc-50 py-3">Adicionar ao carrinho</button>
                </div>
            </div>
            <div className="container max-w-6xl py-5">
                <HomeSectionProducts />
            </div>
        </section>
    )
}