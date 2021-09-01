import ContainerFluid from './containerFluid'
import { H1 } from './title'

function Header() {
  return (
    <header className='header'>
      <ContainerFluid>
        <H1>Meu primeiro site em React</H1>
      </ContainerFluid>
    </header>
  )
}

export default Header
