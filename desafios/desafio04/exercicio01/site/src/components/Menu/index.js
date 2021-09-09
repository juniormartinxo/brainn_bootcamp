import ContainerFluid from '../ContainerFluid'
import { NavContainer, MenuList, MenuListItem, MenuListLink } from './styles'

function MenuItem({ id, text, link }) {
  return (
    <MenuListItem>
      <MenuListLink href={link} key={id}>
        {text}
      </MenuListLink>
    </MenuListItem>
  )
}

function Menu() {
  const menuItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Sobre', link: '/sobre' },
    { id: 3, text: 'Contato', link: '/contato' },
  ]

  return (
    <NavContainer>
      <ContainerFluid>
        <MenuList>
          {menuItems.map(item => (
            <MenuItem key={item.id} text={item.text} link={item.link} />
          ))}
        </MenuList>
      </ContainerFluid>
    </NavContainer>
  )
}

export default Menu
