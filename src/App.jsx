import { useState } from 'react'
import './App.css'
import useSwitch from './custom-hooks/useSwitch';

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h1>SNACK 1</h1>
      <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default App
