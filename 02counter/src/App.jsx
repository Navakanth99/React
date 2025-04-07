import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setState] =useState(5)

  const addValue =() => {
    console.log("value is ", counter)
    counter=counter+1;
    setState(counter)
  }

  const removeValue = () => {
    console.log("value is ", counter)
    counter=counter-1;
    setState(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value 5</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>decrease value {counter} </button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
