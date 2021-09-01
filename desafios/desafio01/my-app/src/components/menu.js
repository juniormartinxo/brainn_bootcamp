import ContainerFluid from './containerFluid'

function Menu() {
  return (
    <nav className='navigation'>
      <ContainerFluid>
        <ul className='menu'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Sobre</a>
          </li>
          <li>
            <a href='/'>Contato</a>
          </li>
        </ul>
      </ContainerFluid>
    </nav>
  )
}

export default Menu
