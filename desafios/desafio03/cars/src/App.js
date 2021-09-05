import { useEffect, useState } from 'react'
import Table from './components/table'
import './App.css'

const urlCars = 'http://localhost:3333/cars'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    function listCars() {
      if (cars === null) {
        return
      }

      fetch(urlCars)
        .then(response => response.json())
        .then(data => {
          console.log('resultado: ', data)
          setCars(data)
        })
    }

    listCars()

    return () => {
      console.log('cleanup')
    }
  }, [])

  return (
    <>
      <Table setCars={setCars} cars={cars}></Table>
    </>
  )
}

export default App
