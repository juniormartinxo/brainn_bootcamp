import ContainerFluid from './container-fluid'
import { H1 } from './title'
import Logo from './logo'

function Header() {
  return (
    <header className='header'>
      <ContainerFluid newClass='flex-row-center'>
        <Logo />
        <H1>:: Bootcamp de React</H1>
      </ContainerFluid>
    </header>
  )
}

export default Header
