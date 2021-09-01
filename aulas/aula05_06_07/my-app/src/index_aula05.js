import ReactDOM from 'react-dom'

function Title() {
  return (
    <>
      <h1>Hello world</h1>
      <p>Eu sou uma aplicação React</p>
    </>
  )
}

ReactDOM.render(<Title />, document.getElementById('root'))
