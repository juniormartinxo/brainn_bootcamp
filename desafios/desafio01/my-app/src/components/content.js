import Button from './button'
import { H2 } from './title'

function Content() {
  return (
    <section className='content'>
      <H2>Conteúdo</H2>
      <p>Nós estamos no conteúdo do site</p>
      <p>
        <Button kind='secondary'>Este é um botão secundário</Button>
      </p>
    </section>
  )
}

export default Content
