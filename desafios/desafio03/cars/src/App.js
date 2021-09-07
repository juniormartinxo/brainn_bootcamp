import { useEffect, useState } from 'react'
import Table from './components/table'
import Form from './components/form'
import { urlListCars } from './config/env'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const getListCars = async () => {
      try {
        const response = await fetch(urlListCars)
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
      <Table cars={cars} setCars={setCars} urlCars={urlListCars}></Table>
    </div>
  )
}

export default App
