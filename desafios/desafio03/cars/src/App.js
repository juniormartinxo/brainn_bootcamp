import { useEffect, useState } from 'react'
import Table from './components/table'
import Form from './components/form'
//import { ListCars } from './services/Cars'

const urlCars = 'http://localhost:3333/cars'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const getListCars = async () => {
      try {
        const response = await fetch(urlCars)
        const json = await response.json()

        setCars(json)
      } catch (error) {
        console.log('error', error)
      }
    }

    getListCars()
  }, [])

  return (
    <div className='container'>
      <Form />
      <Table cars={cars} setCars={setCars}></Table>
    </div>
  )
}

export default App
