//import { useEffect, useState } from 'react'
import { urlDeleteCars } from '../config/env'

function Table({ cars, setCars, urlCars }) {
  /*
  function handleRemoveCar(id) {
    const newCars = cars.filter(car => car.id !== id)
    setCars(newCars)
  }
  */

  return (
    <table>
      <thead>
        <tr>
          <th className='center'>ID</th>
          <th className='center'>Image</th>
          <th className='center'>Brand</th>
          <th className='center'>Model</th>
          <th className='center'>Year</th>
          <th className='center'>Plate</th>
          <th className='center'>Color</th>
          <th className='center'></th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <RowCar key={car.id} car={car} setCars={setCars} cars={cars} />
        ))}
      </tbody>
    </table>
  )
}

function RowCar({ car, setCars, cars, urlCars }) {
  /*
  function handleRemoveCar(id) {
    const newCars = cars.filter(car => car.id !== id)
    setCars(newCars)
  }
  */

  return (
    <tr key={car.id} className='rowCar'>
      <td className='center'>{car.id}</td>
      <td className='center'>
        <img src={car.image} alt={car.brand} className='img-car' />
      </td>
      <td className='center'>{car.brand}</td>
      <td className='center'>{car.model}</td>
      <td className='center'>{car.year}</td>
      <td className='center'>{car.plate}</td>
      <td className='center'>
        <span
          style={{ backgroundColor: car.color }}
          className='box-color'
        ></span>
      </td>
      <td className='center'>
        <button
          className='btnDeleteCar btn btn-x deeppink'
          data-id={car.id}
          onClick={async () => {
            const newCars = cars.filter(carNew => carNew.id !== car.id)

            try {
              const response = await fetch(urlDeleteCars, {
                method: 'DELETE',
                body: JSON.stringify(car.id),
              })
              const json = await response.json()

              setCars(json)
            } catch (error) {
              console.log('error', error)
            }

            await setCars(newCars)
          }}
        >
          <i className='far fa-trash-alt far-sm' data-id={car.id}></i>
        </button>
      </td>
    </tr>
  )
}

export default Table
