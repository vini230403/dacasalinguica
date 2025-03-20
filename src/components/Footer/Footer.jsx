import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <h2 className='text'>Sabores feitos à mão, <br/> com amor e dedicação.</h2>
        <img src="/img/logo.svg" alt="logo" className='logo' />
        <div className='contact'>
          <h2>Contate-nos</h2>
          <ul>
            <li>
              <a href="mailto:exemplo@email.com" className='phone'>(11)98765-4321</a>
            </li>
            <li>
              <a href="tel:+5511999999999" className='email'>dacasa@teste.com.br</a>
            </li>
            <li>
              <a href="https://www.google.com/maps?q=Av+Paulista,+São+Paulo" target="_blank" className='location'>Av.teste número 666</a>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer