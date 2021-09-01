import Button from './button'

function Content() {
  return (
    <section className='content'>
      <h2>Conteúdo</h2>
      <p>Nós estamos no conteúdo do site</p>
      <p>
        <Button kind='secondary'>Este é um botão secundário</Button>
      </p>
    </section>
  )
}

export default Content
