import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl  mb-4'>Tailwind test</h1>
     <div className="relative h-100 w-75 rounded-md ">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzV0Z5fDR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>

        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Delba</h1>
          
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi,
            debitis?
          </p>
          
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile &rarr;
          </button>
        </div>
      </div>
    </>
  )
}

export default App
