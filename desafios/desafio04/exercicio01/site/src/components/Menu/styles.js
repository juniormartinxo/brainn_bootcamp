import styled from 'styled-components'

const NavContainer = styled.nav`
  grid-area: navigation;
  background-color: #ff3366;
`

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 0px;
`

const MenuListItem = styled.li`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  margin-right: 1px;
`

const MenuListLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 10px 15px;

  &:hover {
    color: #000;
  }
`

export { NavContainer, MenuList, MenuListItem, MenuListLink }
