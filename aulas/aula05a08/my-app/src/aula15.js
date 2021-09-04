import { useState } from 'react'

const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function App() {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleChange = e => {
    if (!Number.isNaN(Number(e.target.value))) {
      setCep(e.target.value)
    }
  }

  function handleClick() {
    fetch(url.replace('[CEP]', cep))
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setAddress(data.address)
        setDistrict(data.district)
        setCity(data.city)
        setState(data.state)
      })
  }

  return (
    <div>
      <h1>CEP</h1>
      <input type='text' value={cep} onChange={handleChange} />
      <button onClick={handleClick}>Buscar</button>
      <div id='result'>
        <p>{address}</p>
        <p>{district}</p>
        <p>{city}</p>
        <p>{state}</p>
      </div>
    </div>
  )
}

export default App
