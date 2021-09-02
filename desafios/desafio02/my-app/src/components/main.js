import Sidebar from './sidebar'
import Content from './content'

function Main({ contents }) {
  return (
    <main className='main'>
      <Sidebar contents={contents} />
      <Content />
    </main>
  )
}

export default Main
