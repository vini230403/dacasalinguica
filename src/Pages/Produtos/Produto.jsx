import { useState } from "react"

import { MdOutlineSell } from "react-icons/md";

function Produto() {
  const [modalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const produtos = [
    {
      nome: "Legumes",
      img: "/legumes.jpg",
      desc: "Leve e saborosa, feita com pedaços de legumes frescos que trazem equilíbrio e textura ao prato.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor legumes",
    },
    {
      nome: "Alho",
      img: "/alho.jpeg",
      desc: "Tradicional e aromática, com alho na medida certa para um sabor marcante sem exageros.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor alho",
    },
    {
      nome: "Tomate Seco",
      img: "/tomate_seco.jpg",
      desc: "Um toque sofisticado com o sabor adocicado e intenso do tomate seco. Ideal para surpreender.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor tomate seco",
    },
    {
      nome: "Apimentada",
      img: "/apimentada.jpg",
      desc: "Picância equilibrada, perfeita pra quem gosta de um sabor mais quente sem exagerar.",
      link: "https://api.whatsapp.com/send?phone=+5511934981125&text=Olá, tive interesse na linguiça sabor apimentada",
    },
  ]

  const MASCOTE_LEFT = { id: "mascote-left", mascote: true, img: "/mascote.png" }
  const MASCOTE_RIGHT = { id: "mascote-right", mascote: true, img: "/mascoteInvert.png" }

  let itens = produtos
  if (produtos.length % 3 === 1) {
    const base = produtos.slice(0, -1)
    const last = produtos[produtos.length - 1]
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
    <section id="produtos" className="text-center py-4 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-12">
          <h1 className="title text-4xl md:text-5xl text-[var(--text-color)] mb-4">
            Nosso Cardápio
          </h1>
          <p className="subtitle text-lg md:text-xl text-[var(--secondary-color)] max-w-2xl mx-auto leading-relaxed">
            Conheça nossa seleção de linguiças artesanais, cada uma com seu sabor único e especial
          </p>
        </div>
      </div>

      {/* Grid de produtos */}
      <div className="max-w-5xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
          {itens.map((produto, index) => (
            <li
              key={produto.id ?? `${produto.nome}-${index}`}
              className={`${produto.mascote ? "hidden lg:flex items-center justify-center" : "flex justify-center"}`}
            >
              {!produto.mascote ? (
                // Card do Produto
                <div 
                  className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-[var(--border-color)] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col w-full max-w-sm cursor-pointer"
                  onClick={() => abrirModal(produto)}
                >
                  {/* Imagem do produto */}
                  <div className="relative w-full h-auto overflow-hidden">
                    <img
                      src={produto.img}
                      alt={produto.nome}
                      className="w-full h-full object-cover brightness-110 contrast-110 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  </div>
                  
                  {/* Conteúdo do card */}
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[var(--text-color)] mb-3">
                      Linguiça de {produto.nome}
                    </h3>
                    <p className="text-[var(--secondary-color)] text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                      {produto.desc}
                    </p>
                    <span className="text-[var(--text-color)] font-semibold text-sm md:text-base hover:text-[#d14034] transition-colors duration-300">
                      Clique para saber mais →
                    </span>
                  </div>
                </div>
              ) : (
                // Mascote
                <img
                  src={produto.img}
                  alt="Mascote"
                  className="w-full max-w-[200px] mx-auto select-none pointer-events-none"
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {modalOpen && produtoSelecionado && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex justify-center items-center px-4 py-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full text-center relative shadow-2xl border-2 border-[var(--border-color)]">
            {/* Botão fechar */}
            <button
              onClick={fecharModal}
              className="absolute md:top-3 md:right-1 top-0.5 right-0 text-[var(--text-color)] text-3xl font-bold hover:text-[#d14034] hover:scale-110 transition-all duration-300 cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-md"
            >
              ×
            </button>

            {/* Imagem do produto no modal */}
            <div className="relative w-full h-auto overflow-hidden rounded-xl border-4 border-[var(--text-color)] mb-6">
              <img
                src={produtoSelecionado.img}
                alt={produtoSelecionado.nome}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo do modal */}
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-color)] mb-4">
              Linguiça de {produtoSelecionado.nome}
            </h3>
            <p className="text-[var(--secondary-color)] text-base md:text-lg leading-relaxed mb-6 font-medium">
              {produtoSelecionado.desc}
            </p>

            {/* Botão de compra */}
            <a
              href={produtoSelecionado.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[var(--text-color)] text-white font-bold px-6 py-3 rounded-full text-base md:text-lg shadow-lg hover:bg-[#d14034] hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              Fazer pedido no WhatsApp
              <MdOutlineSell className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Produto