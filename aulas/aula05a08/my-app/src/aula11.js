import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(null)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>
        Contador:
        {counter === null ? ' vazio...' : counter}
      </h1>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
