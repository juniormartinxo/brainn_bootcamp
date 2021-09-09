import styled from 'styled-components'

const ContentStyle = styled.div`
  grid-area: content;
  padding: 15px 0px;
`

const TitleArticle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 10px;
  line-height: normal;
`

const ParagraphArticle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 10px;
  line-height: 24px;
`

export { TitleArticle, ContentStyle, ParagraphArticle }
