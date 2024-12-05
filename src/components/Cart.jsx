export default function Cart({ position, closeCart }) {

    return (
        <div className="fixed top-0 right-0 w-full h-screen max-w-md bg-zinc-700 duration-300" style={{
            transform: `translateX(${position})`
        }}>
            <button className="text-zinc-50 w-full flex items-center py-2 px-5 gap-5 bg-emerald-600" onClick={closeCart}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <h2 className="text-2xl font-bold">Ocultar carrinho</h2>
            </button>
        </div>
    )
}