import Button from './button'
import { H2 } from './title'

function Content({ title, text }) {
  console.log(title)
  return (
    <section className='content'>
      <H2>{title === undefined ? 'Conteúdo' : title}</H2>
      <p>{text === undefined ? 'Selecione um artigo' : text}</p>
    </section>
  )
}

export default Content
