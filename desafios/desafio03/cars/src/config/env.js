const ENV = process.env

const urlListCars = `${ENV.REACT_APP_URL_API_CARS}/cars`
const urlDeleteCars = `${ENV.REACT_APP_URL_API_CARS}/`

export { ENV, urlListCars, urlDeleteCars }
