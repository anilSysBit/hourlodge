import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage/>
    </div>f
  )
}

export default App
