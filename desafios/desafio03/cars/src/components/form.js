import { urlCars } from '../config/env'

function Form({ cars, setCars }) {
  function handleSubmit(e) {
    e.preventDefault()

    const randomId = Math.trunc(Math.random() * 1e9)
    const iptCarUrlImage = e.target.elements.iptCarUrlImage.value
    const iptCarBrand = e.target.elements.iptCarBrand.value
    const iptCarModel = e.target.elements.iptCarModel.value
    const iptCarYear = e.target.elements.iptCarYear.value
    const iptCarPlate = e.target.elements.iptCarPlate.value
    const iptCarColor = e.target.elements.iptCarColor.value

    const car = {
      id: randomId,
      image: iptCarUrlImage,
      brand: iptCarBrand,
      model: iptCarModel,
      year: iptCarYear,
      plate: iptCarPlate,
      color: iptCarColor,
    }

    if (iptCarUrlImage.length === 0) {
      alert('Adicione uma imagem')
      return
    }

    if (iptCarBrand.length === 0) {
      alert('Preencha a marca')
      return
    }

    if (iptCarModel.length === 0) {
      alert('Preencha o modelo')
      return
    }

    if (iptCarYear.length === 0) {
      alert('Preencha o ano')
      return
    }

    if (iptCarPlate.length === 0) {
      alert('Preencha a placa')
      return
    }

    if (iptCarColor.length === 0) {
      alert('Preencha a cor')
      return
    }

    fetch(urlCars, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then(res => res.json())
      .then(data => {
        setCars([...cars, data])
      })
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
