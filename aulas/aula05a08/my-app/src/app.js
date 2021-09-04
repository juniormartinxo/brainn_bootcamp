const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function App() {
  function handleClick() {
    fetch(url.replace('[CEP]', document.getElementById('cep').value))
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.getElementById('result').innerHTML = `
                    <p>${data.address}</p>
                    <p>${data.district}</p>
                    <p>${data.city}</p>
                    <p>${data.state}</p>
                `
      })
  }

  return (
    <div>
      <h1>CEP</h1>
      <input type='text' id='cep' />
      <button onClick={handleClick}>Buscar</button>
      <div id='result'></div>
    </div>
  )
}

export default App
