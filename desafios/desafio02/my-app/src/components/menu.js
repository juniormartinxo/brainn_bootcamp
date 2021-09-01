import ContainerFluid from './containerFluid'

function MenuItem({ text, link }) {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  )
}

function Menu() {
  return (
    <nav className='navigation'>
      <ContainerFluid>
        <ul className='menu'>
          <MenuItem text='Home' link='/' />
          <MenuItem text='Sobre' link='/' />
          <MenuItem text='Contato' link='/' />
        </ul>
      </ContainerFluid>
    </nav>
  )
}

export default Menu
