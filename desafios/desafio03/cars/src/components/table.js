function Table({ cars, setCars }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Plate</th>
          <th>Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <tr key={car.id} className='rowCar'>
            <td>{car.id}</td>
            <td>
              <img src={car.image} alt={car.brand} className='img-car' />
            </td>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.plate}</td>
            <td>{car.color}</td>
            <td>
              <button
                className='btnDeleteCar btn btn-x deeppink'
                data-id={car.id}
                oncClick={() => {
                  console.log('delete')
                }}
              >
                <i className='far fa-trash-alt far-sm' data-id={car.id}></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
