import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>Here we start the project</h1>
      <Home/>
    </>
  )
}

export default App
