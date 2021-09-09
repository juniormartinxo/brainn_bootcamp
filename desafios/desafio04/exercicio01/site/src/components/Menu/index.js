import ContainerFluid from './ContainerFluid'

function MenuItem({ id, text, link }) {
  return (
    <li>
      <a href={link} key={id}>
        {text}
      </a>
    </li>
  )
}

function Menu() {
  const menuItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Sobre', link: '/sobre' },
    { id: 3, text: 'Contato', link: '/contato' },
  ]

  return (
    <nav className='navigation'>
      <ContainerFluid>
        <ul className='menu'>
          {menuItems.map(item => (
            <MenuItem key={item.id} text={item.text} link={item.link} />
          ))}
        </ul>
      </ContainerFluid>
    </nav>
  )
}

export default Menu
