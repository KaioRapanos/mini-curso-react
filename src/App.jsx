import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Portifolio'
import './Portifolio.css'
import Portfolio from './Portifolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Portfolio/>
  )
}

export default App
