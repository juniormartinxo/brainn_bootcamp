import ReactDOM from 'react-dom'

/*
function Title(props) {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}
*/

// Utilizando destructuring
function Title({ text }) {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

ReactDOM.render(<Title text='Hello world' />, document.getElementById('root'))
