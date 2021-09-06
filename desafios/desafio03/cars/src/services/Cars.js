export async function ListCars() {
  const urlCars = 'http://localhost:3333/cars'

  await fetch(urlCars)
    .then(response => response.json())
    .then(data => data)
}
