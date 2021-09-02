import Sidebar from './sidebar'
import Content from './content'

function Main({ articles }) {
  return (
    <main className='main'>
      <Sidebar articles={articles} />
      <Content title={articles[0].title} text={articles[0].content} />
    </main>
  )
}

export default Main
