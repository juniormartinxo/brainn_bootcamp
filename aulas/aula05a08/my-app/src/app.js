import { useEffect, useState } from 'react'

const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function getCepUrl(cep) {
  return url.replace('[CEP]', cep)
}

function App() {
  const [counter, setCounter] = useState(1)
  const [cep, setCep] = useState(null)

  useEffect(() => {
    function searchCep() {
      if (cep === null) {
        return
      }

      fetch(getCepUrl(cep))
        .then(response => response.json())
        .then(data => {
          console.log('resultado: ', data)
        })
    }

    searchCep()

    return () => {
      console.log('cleanup')
    }
  }, [cep])

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Cep cep={cep} setCep={setCep} />
    </>
  )
}

function Counter({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(c => c - 1)}>diminuir -</button>
      <button onClick={() => setCounter(c => c + 1)}>+ aumentar</button>
    </>
  )
}

function Cep({ cep, setCep }) {
  function handleSubmit(e) {
    e.preventDefault()

    console.log(e.target.campoCep.value)

    setCep(e.target.campoCep.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='campoCep' />
        <button type='submit'>Busca CEP</button>
      </form>
    </>
  )
}

export default App
