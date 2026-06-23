import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Hieeee!!!</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
