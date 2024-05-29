import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <br />
      <Home/>
    </>
  )
}

export default App
