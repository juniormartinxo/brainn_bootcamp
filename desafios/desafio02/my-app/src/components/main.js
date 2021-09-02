import { useState } from 'react'
import Sidebar from './sidebar'
import Content from './content'

function Main({ articles }) {
  const [selectedArticle, setSelectedArticle] = useState(articles[0])
  return (
    <main className='main'>
      <Sidebar
        articles={articles}
        handleContent={setSelectedArticle}
        selectedArticle={selectedArticle}
      />
      <Content article={selectedArticle} />
    </main>
  )
}

export default Main
