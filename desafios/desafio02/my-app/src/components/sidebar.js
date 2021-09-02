import { H2, H6 } from './title'
import { Button, ButtonArticle } from './button'

function article({ id, title, content }) {
  return (
    <div className='content-sidebar' key={id}>
      <H6>{title}</H6>
      <p>
        <ButtonArticle
          title={title}
          text={content}
          kind='secondary small'
        ></ButtonArticle>
      </p>
    </div>
  )
}

function Sidebar({ articles }) {
  return (
    <aside className='sidebar'>
      <H2>Artigos</H2>
      {articles.map(item => article(item))}

      <p>
        <Button kind='primary'>Ver todos artigos</Button>
      </p>
    </aside>
  )
}

export default Sidebar
