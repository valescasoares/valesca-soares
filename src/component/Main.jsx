export default function Main({ categorias }) {
  return (
    <main className="w-screen mt-[100px] flex justify-center">
      <section className="w-[70%] max-[700px]:w-[90%]">
        {categorias.map((categoria) => (
          <div className="mb-[40px] flex max-[700px]:flex-col">
            <img
              className="size-[250px] max-[700px]:size-[360px] rounded-s-2xl max-[700px]:rounded-t-2xl"
              src={categoria.image}
              alt={categoria.title}
            />
            <div className="w-[950px] max-[700px]:w-auto max-[700px]:ml-0 h-[250px] max-[700px]:h-auto max-[700px]:mt-[-210px] py-5 px-5 ml-[-220px] rounded-2xl bg-gradient-to-r from-transparent to-[#686C53] to-20% max-[700px]:bg-gradient-to-b from-transparent to-[#686C53] to-20%">
              <h1 className="ml-[210px] max-[700px]:ml-0 max-[700px]:mt-[150px] font-bold text-2xl text-[#D3C4B1]">
                {categoria.title}
              </h1>
              <p className="ml-[210px] max-[700px]:ml-0 text-white">
                {categoria.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
