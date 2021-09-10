import { useEffect, useState } from 'react'
import Table from './components/Table'
import Form from './components/Form'
import { urlCars } from './config/env'
import Alert from './components/Alert'
import Container from './components/Container'
import GlobalStyle from './styles/global-styles'

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
    <Container>
      <GlobalStyle />
      <Form
        setCars={setCars}
        cars={cars}
        setAlertStatus={setAlertStatus}
        setAlertMessage={setAlertMessage}
      />
      <Table cars={cars} setCars={setCars}></Table>
      <Alert alertStatus={alertStatus}>{alertMessage}</Alert>
    </Container>
  )
}

export default App
