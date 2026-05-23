import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
let [counter , setCounter] = useState(15);

const addValue = () =>{
  if(counter == 20) {
     return;
  }else{
  counter = counter + 1;
  setCounter(counter);
  }
}

const removeValue = () =>{
  if(counter == 0) {
    return;
  }else{
  counter = counter - 1;
  setCounter(counter);
  }
}
  return (
    <>
      <h1>Hello </h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
