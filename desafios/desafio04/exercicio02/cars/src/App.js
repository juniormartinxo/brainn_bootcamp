import { useEffect, useState } from 'react'
import Table from './components/table'
import Form from './components/form'
import { urlCars } from './config/env'
import Alert from './components/alert'

function App() {
  const [cars, setCars] = useState([])
  const [alertStatus, setAlertStatus] = useState('hidden')
  const [alertMessage, setAlertMessage] = useState('')

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
      <Form
        setCars={setCars}
        cars={cars}
        setAlertStatus={setAlertStatus}
        setAlertMessage={setAlertMessage}
      />
      <Table cars={cars} setCars={setCars}></Table>
      <Alert alertStatus={alertStatus}>{alertMessage}</Alert>
    </div>
  )
}

export default App
