import { useState } from 'react'
import './App.css'
import NewCard from './components/NewCard/NewCard'
import NewGrid from './components/NewGrid/NewGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NewCard />
      {/* <NewGrid/> */}
    </div>
  )
}

export default App
