import { useState } from 'react'
import './App.css'
import useSwitch from './custom-hooks/useSwitch';
import useDate from './custom-hooks/useDate';
import useCustomPointer from './custom-hooks/useCustomPointer';

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");

  return <>
    <div>
      <h1>SNACK 1</h1>
      <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
    <div>
      <h1>SNACK 2</h1>
      <h2>Data e ora attuali:</h2>
      <p>{currentDate.toLocaleString()}</p>
    </div>
    <div>
      <h1>SNACK 3</h1>
      <h2>Sposta il mouse per vedere il cursore personalizzato!</h2>
      {customPointer}
    </div>
  </>;
}

export default App;
