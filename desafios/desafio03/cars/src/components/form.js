import { urlCars } from '../config/env'

function Form({ cars, setCars, setAlertStatus, setAlertMessage }) {
  function sendMessage(message, status, time) {
    setAlertMessage(message)
    setAlertStatus(status)

    setTimeout(() => {
      setAlertStatus('hidden')
    }, time)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const randomId = Math.trunc(Math.random() * 1e9)
    const iptCarUrlImage = e.target.elements.iptCarUrlImage.value
    const iptCarBrand = e.target.elements.iptCarBrand.value
    const iptCarModel = e.target.elements.iptCarModel.value
    const iptCarYear = e.target.elements.iptCarYear.value
    const iptCarPlate = e.target.elements.iptCarPlate.value
    const iptCarColor = e.target.elements.iptCarColor.value

    if (iptCarUrlImage.length === 0) {
      sendMessage('Preencha o campo URL da imagem!', 'visible', 5000)
      return
    }

    if (iptCarBrand.length === 0) {
      sendMessage('Preencha o campo marca!', 'visible', 5000)
      return
    }

    if (iptCarModel.length === 0) {
      sendMessage('Preencha o campo modelo!', 'visible', 5000)
      return
    }

    if (iptCarYear.length === 0) {
      sendMessage('Preencha o campo ano!', 'visible', 5000)
      return
    }

    if (iptCarPlate.length === 0) {
      sendMessage('Preencha o campo placa!', 'visible', 5000)
      return
    }

    if (iptCarColor.length === 0) {
      sendMessage('Preencha o campo cor!', 'visible', 5000)
      return
    }

    const searchCar = cars.filter(car => car.plate === iptCarPlate)

    if (searchCar.length > 0) {
      sendMessage(
        `Já existe outro carro com a placa "${iptCarPlate}" cadastrado!`,
        'visible',
        5000
      )
      return
    }

    const car = {
      id: randomId,
      image: iptCarUrlImage,
      brand: iptCarBrand,
      model: iptCarModel,
      year: iptCarYear,
      plate: iptCarPlate,
      color: iptCarColor,
    }

    fetch(urlCars, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    }).then(res => res.json())

    setCars([car, ...cars])
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='input-container col s4'>
          <label htmlFor='iptCarUrlImage'>Url da imagem</label>
          <input
            type='text'
            data-js='iptCarUrlImage'
            className='iptCarUrlImage deeppink-border'
            name='iptCarUrlImage'
            id='iptCarUrlImage'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='iptCarBrand'>Marca</label>
          <input
            type='text'
            data-js='iptCarBrand'
            className='iptCarBrand deeppink-border'
            name='iptCarBrand'
            id='iptCarBrand'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='iptCarModel'>Modelo</label>
          <input
            type='text'
            data-js='iptCarModel'
            className='iptCarModel deeppink-border'
            name='iptCarModel'
            id='iptCarModel'
          />
        </div>
      </div>

      <div className='row'>
        <div className='input-container col s4'>
          <label htmlFor='iptCarYear'>Ano</label>
          <input
            type='number'
            data-js='iptCarYear'
            className='iptCarYear deeppink-border'
            name='iptCarYear'
            id='iptCarYear'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='iptCarPlate'>Placa</label>
          <input
            type='text'
            data-js='iptCarPlate'
            className='iptCarPlate deeppink-border'
            name='iptCarPlate'
            id='iptCarPlate'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='iptCarColor'>Color</label>
          <br />
          <input
            type='color'
            data-js='iptCarColor'
            className='iptCarColor'
            name='iptCarColor'
            id='iptCarColor'
          />
        </div>
      </div>

      <div className='input-container'>
        <button
          type='submit'
          className='btn deeppink col'
          data-js='btnInsertCar'
          name='btnInsertCar'
          id='btnInsertCar'
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Form
