import HomeSectionProducts from "../components/HomeSectionProducts";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-zinc-50 flex justify-center items-center flex-col gap-5">
            <div className="max-w-lg flex flex-col gap-5 items-center">
                <h2 className="text-4xl text-zinc-800 font-bold">Projeto E-commerce</h2>
                <p className="text-md text-center text-zinc-700">Este projeto visa simular um e-commerce, não sendo desenvolvido para fins lucrativos. Todo o sistema ocorre via client-side, não havendo validação de dados ou qualquer outro tipo de operação back-end.</p>
                <div className="flex gap-8">
                    <a href="https://github.com/heitor2002" className="border border-zinc-400 text-zinc-800 py-3 px-5 hover:bg-zinc-700 hover:text-zinc-50 duration-200">Github</a>
                    <a href="" className="border border-zinc-400 text-zinc-800 py-3 px-5 hover:bg-zinc-700 hover:text-zinc-50 duration-200">Repositório Github</a>
                </div>
            </div>
            <div className="container max-w-6xl">
                <HomeSectionProducts />
            </div>
        </div>
    )
}