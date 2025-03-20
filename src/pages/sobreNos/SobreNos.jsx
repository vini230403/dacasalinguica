import './sobreNos.css'

const SobreNos = () => {
  return (
    <div>
      <h1>Sobre Nós</h1>
      <div className='container'>
        <p className='sobrenos'>
        Bem-vindo à Da Casa, o Sabor da Tradição Artesanal! <br />
        Chegou a nova referência em linguiças artesanais! Na Da Casa, combinamos tradição e qualidade para oferecer linguiças feitas à mão, com ingredientes selecionados e temperos especiais. <br />
        Nossos produtos são perfeitos para churrascos, petiscos e receitas especiais, garantindo sempre frescor e sabor incomparáveis. <br />
        Venha conhecer e se surpreender com a verdadeira experiência da linguiça artesanal!
        </p>
      </div>
      <img src="/img/cardapio.jpg" alt="cardapio" className='cardapio'/>
    </div>
  )
}

export default SobreNos