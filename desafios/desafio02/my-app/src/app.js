import Header from './components/header'
import Menu from './components/menu'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  const articles = [
    {
      id: 1,
      title: 'Map() explicado de uma forma que você nunca viu antes!',
      content: `Aprenda de forma definitiva como utilizar o map() no javascript. O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.`,
    },
    {
      id: 2,
      title: 'Você sabe o que é e como utilizar restructuring?',
      content:
        'O restructuring pode ser a alternativa perfeita para um código limpo e totalmente limpo.',
    },
    {
      id: 3,
      title: '5 técnicas de otimização de desempenho do React',
      content:
        'Quando criamos um componente renderizado, o React cria um DOM virtual para sua árvore de elementos no componente. Agora, sempre que o estado do componente muda, o React recria a árvore virtual do DOM e compara o resultado com a renderização anterior. Em seguida, atualiza apenas o elemento alterado no DOM real. Este processo é chamado de diffing. O React usa o conceito de um DOM virtual para minimizar o custo de desempenho de renderizar novamente uma página da Web porque o DOM real é caro de manipular.',
    },
  ]
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Main articles={articles} />
      <Footer />
    </div>
  )
}

export default App
