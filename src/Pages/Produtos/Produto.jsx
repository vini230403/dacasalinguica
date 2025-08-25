import { useState } from "react"

function Produto() {
  const [modalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const produtos = [
    {
      nome: "Provolone",
      img: "/provolone.png",
      desc: "Perfeita para os amantes de queijo, com o sabor defumado e intenso do provolone derretido.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor provolone",
    },
    {
      nome: "Alho",
      img: "/alho.png",
      desc: "Tradicional e aromática, com alho na medida certa para um sabor marcante sem exageros.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor alho",
    },
    {
      nome: "Bacon",
      img: "/bacon.png",
      desc: "Combinação cremosa e irresistível, recheada com cheddar que derrete em cada mordida.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor cheddar",
    },
    {
      nome: "Frango com alho e mussarela",
      img: "/frangoalhomussarela.png",
      desc: "A clássica linguiça artesanal, temperada na medida certa para qualquer ocasião.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça tradicional",
    },
    {
      nome: "Pimenta",
      img: "/apimentada.jpg",
      desc: "Picância equilibrada, perfeita pra quem gosta de um sabor mais quente sem exagerar.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor pimenta",
    },
    {
      nome: "3 queijos",
      img: "/apimentada.jpg",
      desc: "Picância equilibrada, perfeita pra quem gosta de um sabor mais quente sem exagerar.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor pimenta",
    },
    {
      nome: "Azeitona",
      img: "/apimentada.jpg",
      desc: "Picância equilibrada, perfeita pra quem gosta de um sabor mais quente sem exagerar.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor pimenta",
    },
    {
      nome: "Legumes",
      img: "/apimentada.jpg",
      desc: "Picância equilibrada, perfeita pra quem gosta de um sabor mais quente sem exagerar.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor pimenta",
    },
    {
      nome: "Tomate seco",
      img: "/apimentada.jpg",
      desc: "Picância equilibrada, perfeita pra quem gosta de um sabor mais quente sem exagerar.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor pimenta",
    },
    {
      nome:"Frango na cerveja",
      img: "/apimentada.jpg",
      desc: "Picância equilibrada, perfeita pra quem gosta de um sabor mais quente sem exagerar.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor pimenta",
    },
  ]

  const MASCOTE_LEFT = { id: "mascote-left", mascote: true, img: "/mascote.png" }
  const MASCOTE_RIGHT = { id: "mascote-right", mascote: true, img: "/mascoteInvert.png" }

  let itens = produtos
  if (produtos.length % 3 === 1) {
    const base = produtos.slice(0, -1)
    const last = produtos[produtos.length - 1]
    // resultado da última fileira: [mascote-esq, último produto, mascote-dir]
    itens = [...base, MASCOTE_LEFT, last, MASCOTE_RIGHT]
  }

  const abrirModal = (produto) => {
    if (produto.mascote) return
    setProdutoSelecionado(produto)
    setModalOpen(true)
  }

  const fecharModal = () => {
    setModalOpen(false)
    setProdutoSelecionado(null)
  }

  return (
    <section id="produtos" className="text-center">
      {/* Título */}
      <h1 className="title text-4xl md:text-5xl font-bold text-[var(--text-color)] mb-10">
        Produtos
      </h1>


      {/* Grid de produtos */}
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 list-none mb-12">
          {itens.map((produto, index) => (
            <li
              key={produto.id ?? `${produto.nome}-${index}`}
              className={`w-[250px] text-center ${
                produto.mascote ? "hidden lg:block" : ""
              }`}
            >
              {/* imagem */}
              <img
                src={produto.img}
                alt={produto.mascote ? "Mascote" : produto.nome}
                onClick={() => abrirModal(produto)}
                className={
                  produto.mascote
                    ? // mascote: sem clique, sem hover, só desktop
                      "w-full max-w-[220px] mx-auto select-none pointer-events-none"
                    : // produto normal
                      "w-full rounded-xl border-[6px] border-[var(--text-color)] mb-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                }
              />

              {/* textos só para produto, não para mascote */}
              {!produto.mascote && (
                <>
                  <h3 className="font-serif text-xl">
                    Linguiça de {produto.nome}
                  </h3>
                  <p
                    className="text-[var(--text-color)] cursor-pointer"
                    onClick={() => abrirModal(produto)}
                  >
                    Clique para saber mais
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Modal */}
      {modalOpen && produtoSelecionado && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex justify-center items-center px-4">
          <div className="bg-[#eaddcf] rounded-xl p-8 max-w-md w-full text-center relative">
            {/* Botão fechar */}
            <button
              onClick={fecharModal}
              className="absolute top-2 right-2 text-[var(--text-color)] text-4xl font-bold hover:text-[#d14034] hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              ×
            </button>

            <img
              src={produtoSelecionado.img}
              alt={produtoSelecionado.nome}
              className="w-full rounded-xl border-[6px] border-[var(--text-color)] mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 font-serif">
              {produtoSelecionado.nome}
            </h3>
            <p className="mb-4 font-medium font-serif">
              {produtoSelecionado.desc}
            </p>

            <a
              href={produtoSelecionado.link}
              target="_blank"
              className="inline-flex items-center bg-[var(--text-color)] text-[var(--base-color)] font-bold px-4 py-2 rounded-full text-lg shadow-md hover:bg-[#d14034] hover:scale-105 transition-transform duration-300"
            >
              Clique aqui para comprar
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Produto
