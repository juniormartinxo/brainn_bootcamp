import ContainerFluid from '../ContainerFluid'
import { HeaderContainer, TitleHeader } from './styles'
import Logo from '../Logo'

function Header() {
  return (
    <HeaderContainer>
      <ContainerFluid>
        <Logo />
        <TitleHeader>:: Bootcamp de React</TitleHeader>
      </ContainerFluid>
    </HeaderContainer>
  )
}

export default Header
