import { useState } from 'react'
import { Home } from "./components/Layouts/Home/Home";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <h1>Hello</h1>
      <Home/>
    </div>
  
    </>
  )
}

export default App
