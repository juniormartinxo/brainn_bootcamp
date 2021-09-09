import ContainerFluidHeader from '../ContainerFluidHeader'
import { HeaderContainer, TitleHeader } from './styles'
import Logo from '../Logo'

function Header() {
  return (
    <HeaderContainer>
      <ContainerFluidHeader>
        <Logo />
        <TitleHeader>:: Bootcamp de React</TitleHeader>
      </ContainerFluidHeader>
    </HeaderContainer>
  )
}

export default Header
