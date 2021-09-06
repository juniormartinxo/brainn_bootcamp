import { useEffect, useState } from 'react'
import Table from './components/table'
import Form from './components/form'
//import { ListCars } from './services/Cars'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    function getListCars() {
      const urlCars = 'http://localhost:3333/cars'

      fetch(urlCars)
        .then(response => response.json())
        .then(data => setCars(data))
    }

    getListCars()
  }, [])

  return (
    <div className='container'>
      <Form />
      <Table cars={cars}></Table>
    </div>
  )
}

export default App
