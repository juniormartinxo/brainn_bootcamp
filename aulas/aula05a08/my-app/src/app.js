const menu = [
  {
    id: 1,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    text: 'Sobre',
    link: '/sobre',
  },
  {
    id: 3,
    text: 'Contato',
    link: '/contato',
  },
]

function App() {
  return (
    <ul>
      {menu.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.text}</a>
        </li>
      ))}
    </ul>
  )
}

export default App
