import ContainerFluid from '../ContainerFluid'
import FooterContainer from './styles'
import { H3 } from '../Headings'

function Footer() {
  return (
    <FooterContainer>
      <ContainerFluid>
        <h3>Brainn Academy</h3>
        <p>
          Todos os direitos reservados{' '}
          <a href='https://brainn.co' target='_blank' rel='noreferrer'>
            Brainn
          </a>
        </p>
      </ContainerFluid>
    </FooterContainer>
  )
}

export default Footer
