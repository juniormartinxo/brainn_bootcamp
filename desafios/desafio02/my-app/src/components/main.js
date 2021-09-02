import Sidebar from './sidebar'
import Content from './content'

function Main({ contents }) {
  console.log(contents[0].id)
  return (
    <main className='main'>
      <Sidebar contents={contents} />
      <Content title={contents[0].title} text={contents[0].content} />
    </main>
  )
}

export default Main
