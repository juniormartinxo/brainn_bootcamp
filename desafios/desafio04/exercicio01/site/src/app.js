import Header from './components/header'
import Menu from './components/menu'
import Main from './components/main'
import Footer from './components/footer'

const articles = [
  {
    id: 1,
    title: 'Map() explicado de uma forma que você nunca viu antes!',
    content: `O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.

    A função callback é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.

    Se o parametro thisArg foi passado para o método map, ele será repassado para a função callback no momento da invocação para ser utilizado como o this. Caso contrário, o valor undefined será repassado para uso como o this. O valor do this a ser repassado para o callback deve respeitar as regras para determinar como o this é acessado por uma função (em inglês).`,
  },
  {
    id: 2,
    title: 'Você sabe o que é e como utilizar restructuring?',
    content: `A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

      Entender o que esse recurso faz é simples: ele facilita o acesso a dados dentro de um array ou objeto e a criação de variáveis que contenham esses dados. Porém isso não quer dizer que ele faça pouca coisa. Na verdade, suas aplicações são bastante diversas, e vou tentar contemplar algumas neste post.
      `,
  },
  {
    id: 3,
    title: '5 técnicas de otimização de desempenho do React',
    content:
      'Quando criamos um componente renderizado, o React cria um DOM virtual para sua árvore de elementos no componente. Agora, sempre que o estado do componente muda, o React recria a árvore virtual do DOM e compara o resultado com a renderização anterior. Em seguida, atualiza apenas o elemento alterado no DOM real. Este processo é chamado de diffing. O React usa o conceito de um DOM virtual para minimizar o custo de desempenho de renderizar novamente uma página da Web porque o DOM real é caro de manipular.',
  },
]

function App() {
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
