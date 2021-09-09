import {
  AsideStyle,
  SidebarContainer,
  TitleListSideBar,
  TitleItemListSideBar,
} from './styles'

function Sidebar({ articles, handleContent, selectedArticle }) {
  return (
    <AsideStyle>
      <TitleListSideBar>Artigos</TitleListSideBar>
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
            <TitleItemListSideBar>{article.title}</TitleItemListSideBar>
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
