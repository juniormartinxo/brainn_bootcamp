import { H2 } from './headings'

function Content({ article }) {
  return (
    <section className='content'>
      <H2 dataJs='article-title'>{article.title}</H2>
      <p data-js='article-text'>{article.content}</p>
    </section>
  )
}

export default Content
