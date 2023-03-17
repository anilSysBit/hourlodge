import { useState } from 'react'
import "./styles/main.css"
import reactLogo from './assets/react.svg'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
