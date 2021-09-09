import { useState } from 'react'
import MainContainer from './styles'
import Sidebar from '../Sidebar'
import Content from '../Content'

function Main({ articles }) {
  const [selectedArticle, setSelectedArticle] = useState(articles[0])
  return (
    <MainContainer>
      <Sidebar
        articles={articles}
        handleContent={setSelectedArticle}
        selectedArticle={selectedArticle}
      />
      <Content article={selectedArticle} />
    </MainContainer>
  )
}

export default Main
