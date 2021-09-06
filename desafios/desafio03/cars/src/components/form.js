function Form() {
  return (
    <form>
      <div className='row'>
        <div className='input-container col s4'>
          <label htmlFor='inputCarUrlImage'>Url da imagem</label>
          <input
            type='text'
            data-js='inputCarUrlImage'
            className='inputCarUrlImage deeppink-border'
            name='inputCarUrlImage'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='inputCarBrand'>Marca</label>
          <input
            type='text'
            data-js='inputCarBrand'
            className='inputCarBrand deeppink-border'
            name='inputCarBrand'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='inputCarModel'>Modelo</label>
          <input
            type='text'
            data-js='inputCarModel'
            className='inputCarModel deeppink-border'
            name='inputCarModel'
          />
        </div>
      </div>

      <div className='row'>
        <div className='input-container col s4'>
          <label htmlFor='inputCarYear'>Ano</label>
          <input
            type='number'
            data-js='inputCarYear'
            className='inputCarYear deeppink-border'
            name='inputCarYear'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='inputCarPlate'>Placa</label>
          <input
            type='text'
            data-js='inputCarPlate'
            className='inputCarPlate deeppink-border'
            name='inputCarPlate'
          />
        </div>
        <div className='input-container col s4'>
          <label htmlFor='inputCarColor'>Color</label>
          <br />
          <input
            type='color'
            data-js='inputCarColor'
            className='inputCarColor'
            name='inputCarColor'
          />
        </div>
      </div>

      <div className='input-container'>
        <button
          type='button'
          className='btn deeppink col'
          data-js='btnInsertCar'
          name='btnInsertCar'
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Form
