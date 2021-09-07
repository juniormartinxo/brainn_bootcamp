import { useState } from 'react'
import { urlCars } from '../config/env'

function Form({ cars, setCars }) {
  const [iptCarUrlImage, setIptCarUrlImage] = useState('')
  const [iptCarBrand, setIptCarBrand] = useState('')
  const [iptCarModel, setIptCarModel] = useState('')
  const [iptCarYear, setIptCarYear] = useState('')
  const [iptCarPlate, setIptCarPlate] = useState('')
  const [iptCarColor, setIptCarColor] = useState('#FFFFFF')

  return (
    <form>
      <div className='row'>
        <div className='input-container col s4'>
          <label htmlFor='iptCarUrlImage'>Url da imagem</label>
          <input
            type='text'
            data-js='iptCarUrlImage'
            className='iptCarUrlImage deeppink-border'
            name='iptCarUrlImage'
            value={iptCarUrlImage}
            onChange={e => setIptCarUrlImage(e.target.value)}
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='iptCarBrand'>Marca</label>
          <input
            type='text'
            data-js='iptCarBrand'
            className='iptCarBrand deeppink-border'
            name='iptCarBrand'
            value={iptCarBrand}
            onChange={e => setIptCarBrand(e.target.value)}
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='iptCarModel'>Modelo</label>
          <input
            type='text'
            data-js='iptCarModel'
            className='iptCarModel deeppink-border'
            name='iptCarModel'
            value={iptCarModel}
            onChange={e => setIptCarModel(e.target.value)}
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
            value={iptCarYear}
            onChange={e => setIptCarYear(e.target.value)}
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='iptCarPlate'>Placa</label>
          <input
            type='text'
            data-js='iptCarPlate'
            className='iptCarPlate deeppink-border'
            name='iptCarPlate'
            value={iptCarPlate}
            onChange={e => setIptCarPlate(e.target.value)}
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
            value={iptCarColor}
            onChange={e => {
              setIptCarColor(e.target.value)
            }}
          />
        </div>
      </div>

      <div className='input-container'>
        <button
          type='button'
          className='btn deeppink col'
          data-js='btnInsertCar'
          name='btnInsertCar'
          onClick={async () => {
            const randomId = Math.trunc(Math.random() * 1e9)

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

            const dataCars = {
              id: randomId,
              image: iptCarUrlImage,
              brand: iptCarBrand,
              model: iptCarModel,
              year: iptCarYear,
              plate: iptCarPlate,
              color: iptCarColor,
            }

            try {
              await fetch(urlCars, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(dataCars),
              })
              setCars([dataCars, ...cars])
            } catch (error) {
              console.log('error', error)
            }
          }}
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Form
