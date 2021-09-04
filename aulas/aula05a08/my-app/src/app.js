import { useEffect, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Counter counter={counter} />
      <button onClick={() => setCounter(c => c - 1)}>diminuir -</button>
      <button onClick={() => setCounter(c => c + 1)}>+ aumentar</button>
    </>
  )
}

function Counter({ counter }) {
  console.log('counter')

  useEffect(() => {
    console.log('useEffect de counter')

    // clean
    return () => {
      console.log('clean effect de counter')
    }
  })

  return (
    <>
      <h1>{counter}</h1>
    </>
  )
}

export default App
