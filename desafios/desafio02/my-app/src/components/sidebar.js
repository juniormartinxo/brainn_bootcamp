import { H2, H6 } from './title'
import Button from './button'

function articles({ id, title, content }) {
  return (
    <div className='content-sidebar' key={id}>
      <H6>{title}</H6>
      {/*<p>{content}</p>*/}
    </div>
  )
}

function Sidebar({ contents }) {
  return (
    <aside className='sidebar'>
      <H2>Artigos</H2>
      {contents.map(item => articles(item))}

      <p>
        <Button kind='primary'>Ver todos artigos</Button>
      </p>
    </aside>
  )
}

export default Sidebar
