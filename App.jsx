import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = ()=> setCount (count + 1);
  const decrement = ()=> setCount (count - 1);

  return (
    <>
      
      <h1>Counter = {count}</h1>
      <button onClick={increment}>Increment +</button>
      <button style={{marginLeft:50}} onClick={decrement}>Decrement -</button>
      <br /><br />
      {/* <button onClick={handleReset}>Reset</button> */}

    </>
  )
}

export default App
