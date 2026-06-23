import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Mahima",
    age : 20
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl  mb-4'>Tailwind test</h1>
     <Card username = "Mahima" btnText = "click me "/>
     <Card username = "Deepika" btnText = "visit me"/>
    </>
  )
}

export default App
