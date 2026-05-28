import { useState , useCallback ,useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*_-[]{}";

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass = pass + str.charAt(char);
    }
     setPassword(pass);
  } , [length,numAllowed,charAllowed,setPassword])
 
  useEffect(()=>{passwordGenerator()} , [length , numAllowed , charAllowed , passwordGenerator])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 p-4">
      <h1 className='text-white text-center my-3 text-2xl font-semibold'>Password generator</h1>
      
      <div className="flex shadow items-center overflow-hidden mb-4 bg-white rounded-xl">
        <input 
          type="text" 
          value={password}
          className='outline-hidden w-full py-2 px-3 bg-transparent text-gray-700'
          placeholder='password'
          readOnly
        />
        <button className='outline-hidden bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 shrink-0 cursor-pointer h-full transition-colors'>
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 pb-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}/>
          <label> Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked = {numAllowed}
          id='numberInput'
          onChange={() => {setNumAllowed((prev) => !prev)}}/>
          <label htmlFor='numberInput'> Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked = {charAllowed}
          id='charInput'
          onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App