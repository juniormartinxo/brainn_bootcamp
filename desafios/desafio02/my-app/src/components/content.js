import { H2 } from './title'

function Content({ title, text }) {
  return (
    <section className='content'>
      <H2 dataJs='article-title'>{title === undefined ? 'Conteúdo' : title}</H2>
      <p data-js='article-text'>
        {text === undefined ? 'Selecione um artigo' : text}
      </p>
    </section>
  )
}

export default Content
