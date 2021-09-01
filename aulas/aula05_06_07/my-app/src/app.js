function App() {
  return (
    <>
      <Title>Hello World</Title>
      <Sidebar />
      <Content />
    </>
  )
}

function Title({ children }) {
  return <h1>{children}</h1>
}

function Title2({ children }) {
  return <h2>{children}</h2>
}

function Sidebar() {
  return (
    <aside>
      <Title2>Sidebar</Title2>
    </aside>
  )
}

function Content() {
  return (
    <main>
      <h2>Conteúdo</h2>
      <p>Estou no content</p>
    </main>
  )
}

export default App
