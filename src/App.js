import { useState } from 'react';
import './App.css';

function App() {

  let [input, setNumber] = useState(0)

  function Einzahlen () {
    let inputUser = Number(document.getElementById('inputUser').value);
    setNumber(input + inputUser);
  }

  function Auszahlen () {
    let inputUser = Number(document.getElementById('inputUser').value);
    setNumber(input - inputUser);
  }


  return (
    <div className="App">
      <h1 id='title'>Banana Bank</h1>
      <div>
        <p className='konto'>Dein Girokonto</p>
        <p className='saldo'>{input} €</p>
      </div>
      <input className='geldbetrag' id='inputUser'></input>
      <div className='inputAndBtn'>
        <button className='auszahlen' onClick={Einzahlen}>Einzahlen</button>
        <button className='einzahlen' onClick={Auszahlen}>Auszahlen</button>
      </div>
    </div>
  );
}

export default App;
