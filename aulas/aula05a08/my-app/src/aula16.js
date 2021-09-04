import { useEffect } from 'react'

const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function App() {
  useEffect(() => {
    async function getCep() {
      const response = await fetch(url.replace('[CEP]', '06233-030'))
      const data = await response.json()
      console.log(data)
    }
    getCep()
  })

  return (
    <>
      <button>Buscar CEP</button>
    </>
  )
}

export default App
