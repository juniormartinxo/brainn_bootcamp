import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    console.log('inputValue: ', e.target.value)

    if (!Number.isNaN(Number(e.target.value))) {
      setInputValue(e.target.value)
    }
  }

  return (
    <form action=''>
      <input
        type='text'
        name='input'
        value={inputValue}
        onChange={handleChange}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default App
