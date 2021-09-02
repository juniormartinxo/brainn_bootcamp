import Header from './components/header'
import Menu from './components/menu'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  const contentsSidebar = [
    {
      id: 1,
      title: 'Map() explicado de uma forma que você nunca viu antes!',
      content:
        'Aprenda de forma definitiva como utilizar o map() no javascript.',
    },
    {
      id: 2,
      title: 'Você sabe o que é e como utilizar restructuring?',
      content:
        'O restructuring pode ser a alternativa perfeita para um código limpo e totalmente limpo.',
    },
  ]
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Main contents={contentsSidebar} />
      <Footer />
    </div>
  )
}

export default App
