import { urlCars } from '../../config/env'
import {
  TableStyle,
  THead,
  TRow,
  THCenter,
  TBody,
  TDCenter,
  BoxColor,
  ImgCar,
  ButtonDeleteCar,
} from './styles'

function Table({ cars, setCars }) {
  return (
    <TableStyle>
      <THead>
        <TRow>
          <THCenter>ID</THCenter>
          <THCenter>Image</THCenter>
          <THCenter>Brand</THCenter>
          <THCenter>Model</THCenter>
          <THCenter>Year</THCenter>
          <THCenter>Plate</THCenter>
          <THCenter>Color</THCenter>
          <THCenter></THCenter>
        </TRow>
      </THead>
      <TBody>
        {cars.map(car => (
          <RowCar key={car.id} car={car} setCars={setCars} cars={cars} />
        ))}
      </TBody>
    </TableStyle>
  )
}

function RowCar({ car, setCars, cars }) {
  return (
    <TRow key={car.id}>
      <TDCenter>{car.id}</TDCenter>
      <TDCenter>
        <ImgCar src={car.image} alt={car.brand} />
      </TDCenter>
      <TDCenter>{car.brand}</TDCenter>
      <TDCenter>{car.model}</TDCenter>
      <TDCenter>{car.year}</TDCenter>
      <TDCenter>{car.plate}</TDCenter>
      <TDCenter>
        <BoxColor style={{ backgroundColor: car.color }}></BoxColor>
      </TDCenter>
      <TDCenter>
        <ButtonDeleteCar
          data-id={car.id}
          onClick={async () => {
            const newCars = cars.filter(carNew => carNew.id !== car.id)

            try {
              await fetch(urlCars, {
                method: 'DELETE',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify({ id: car.id }),
              })
            } catch (error) {
              console.log('error', error)
            }

            await setCars(newCars)
          }}
        >
          <i className='far fa-trash-alt far-sm' data-id={car.id}></i>
        </ButtonDeleteCar>
      </TDCenter>
    </TRow>
  )
}

export default Table
