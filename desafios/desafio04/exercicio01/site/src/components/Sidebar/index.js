import { H2, H6 } from '../Headings'
import { AsideStyle, SidebarContainer } from './styles'

function Sidebar({ articles, handleContent, selectedArticle }) {
  return (
    <AsideStyle>
      <H2>Artigos</H2>
      {articles.map(article => {
        const checked = selectedArticle === article ? 'checked' : ''
        return (
          <SidebarContainer
            className={checked}
            key={article.id}
            onClick={() => {
              handleContent(article)
            }}
          >
            <H6>{article.title}</H6>
          </SidebarContainer>
        )
      })}

      <p>
        <button>Ver todos artigos</button>
      </p>
    </AsideStyle>
  )
}

export default Sidebar
