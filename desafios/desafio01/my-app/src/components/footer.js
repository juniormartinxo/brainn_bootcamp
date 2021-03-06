import ContainerFluid from './container-fluid'
import { H3 } from './title'

function Footer() {
  return (
    <footer className='footer'>
      <ContainerFluid>
        <H3>Brainn Academy</H3>
        <p>
          Todos os direitos reservados{' '}
          <a href='https://brainn.co' target='_blank' rel='noreferrer'>
            Brainn
          </a>
        </p>
      </ContainerFluid>
    </footer>
  )
}

export default Footer
