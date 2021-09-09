import ContainerFluid from '../ContainerFluid'
import HeaderContainer from './styles'
import { H1 } from '../Headings'
import Logo from '../Logo'

function Header() {
  return (
    <HeaderContainer>
      <ContainerFluid>
        <Logo />
        <H1>:: Bootcamp de React</H1>
      </ContainerFluid>
    </HeaderContainer>
  )
}

export default Header
