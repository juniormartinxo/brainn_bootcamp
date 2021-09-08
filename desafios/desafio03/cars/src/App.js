import { useEffect, useState } from 'react'
import Table from './components/table'
import Form from './components/form'
import { urlCars } from './config/env'
import Alert from './components/alert'

function App() {
  const [cars, setCars] = useState([])
  const [statusAlert, setStatusAlert] = useState('hidden')

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
  }, [setCars])

  return (
    <div className='container'>
      <Form setCars={setCars} cars={cars} setStatusAlert={setStatusAlert} />
      <Table cars={cars} setCars={setCars}></Table>
      <Alert statusAlert={statusAlert}>
        <p>Este é um alert</p>
      </Alert>
    </div>
  )
}

export default App
