import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
const username = 'Mahima';
function Element  () {
  return (
   <h1>Hieeeee~~~</h1>
  )
}

const SecondElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {
 href : 'https://google.com',
        target : '_blank'
    },
    'click me to visit Google ',
    username
)
createRoot(document.getElementById('root')).render(
reactElement
)
