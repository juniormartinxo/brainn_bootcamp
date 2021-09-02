import { H2, H6 } from './headings'
import { Button } from './button'

function Sidebar({ articles, handleContent, selectedArticle }) {
  return (
    <aside className='sidebar'>
      <H2>Artigos</H2>
      {articles.map(article => {
        const checked = selectedArticle === article ? ' checked' : ''
        return (
          <div
            className={'content-sidebar' + checked}
            key={article.id}
            onClick={() => {
              handleContent(article)
            }}
          >
            <H6>{article.title}</H6>
            {/*
            <p>
              <ButtonArticle
                article={article}
                handleContent={handleContent}
                kind='secondary small'
              ></ButtonArticle>
            </p>
            */}
          </div>
        )
      })}

      <p className='container-button-all-articles'>
        <Button kind='primary'>Ver todos artigos</Button>
      </p>
    </aside>
  )
}

export default Sidebar
