import ContainerFluid from '../ContainerFluid'
import { FooterContainer, TitleFooter, TextFooter, LinkFooter } from './styles'

function Footer() {
  return (
    <FooterContainer>
      <ContainerFluid>
        <TitleFooter>Brainn Academy</TitleFooter>
        <br />
        <TextFooter>
          Todos os direitos reservados
          <LinkFooter href='https://brainn.co' target='_blank' rel='noreferrer'>
            Brainn
          </LinkFooter>
          ©{new Date().getFullYear()}
        </TextFooter>
      </ContainerFluid>
    </FooterContainer>
  )
}

export default Footer
