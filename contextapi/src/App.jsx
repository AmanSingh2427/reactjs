import { useState } from 'react'
import './App.css'
import UserContextProvider from './UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserContextProvider>
     <h1 className='bg-green-400 text-white p-4 rounded-xl border-solid border-2'>Context API</h1>
     <Login/>
     <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
