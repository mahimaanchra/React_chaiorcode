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
    /*WHY DOES THIS ONLY ADD 1 INSTEAD OF 5?
        
        1. BATCHING: React collects all these state updates together into a single "batch" 
           to avoid reloading/re-rendering the screen 5 separate times. It does this for 
           performance.
           
        2. THE REASON FOR NO CHANGE: Every single `setCounter` call below reads the *same* original value of `counter` from the current render cycle (which is 15). 
           So React sees this as:
             setCounter(15 + 1); // Reads 15 -> requests state to become 16
             setCounter(15 + 1); // Reads 15 -> requests state to become 16
             setCounter(15 + 1); // Reads 15 -> requests state to become 16
             ...
           It effectively just overwrites the value with 16 five times over.*/
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);

 /* HOW TO ACTUALLY ADD 5 (IF YOU WANTED TO):
        If you pass a callback function inside setCounter, React guarantees it gives you 
        the *most recent updated state* (prevCounter) instead of the frozen value from the 
        render.
        
        Example:
        setCounter(prevCounter => prevCounter + 1); // 15 -> 16
        setCounter(prevCounter => prevCounter + 1); // 16 -> 17    */
  }
}

const removeValue = () =>{
  if(counter == 0) {
    return;
  }else{
  setCounter(counter - 1);
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
