export default function CartPage() {
  return (
    <section className="w-full min-h-screen px-2 bg-zinc-100 flex flex-col justify-center items-center gap-10">
      <h2 className="text-2xl sm:text-5xl font-bold text-green-600 max-w-lg text-center animate-pulse">
        Página de pagamento, você concluiu o simulador
      </h2>
      <p className="text-green-500 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-32"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </p>
      <div className="flex flex-col sm:flex-row gap-8">
        <a
          href="https://github.com/heitor2002"
          className="border border-zinc-400 text-zinc-800 py-3 px-5 hover:bg-zinc-700 hover:text-zinc-50 duration-200"
        >
          Github
        </a>
        <a
          href="https://github.com/hcms3/cart-project"
          className="border border-zinc-400 text-zinc-800 py-3 px-5 hover:bg-zinc-700 hover:text-zinc-50 duration-200"
        >
          Repositório Github
        </a>
      </div>
    </section>
  );
}
