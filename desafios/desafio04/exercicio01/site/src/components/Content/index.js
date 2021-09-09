import { ContentStyle, TitleArticle, ParagraphArticle } from './styles'

function Content({ article }) {
  return (
    <ContentStyle>
      <TitleArticle dataJs='article-title'>{article.title}</TitleArticle>
      <ParagraphArticle>{article.content}</ParagraphArticle>
    </ContentStyle>
  )
}

export default Content
