import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name:"nani",
    age:20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
       <Card  username="Rajesh" header="myProfile"/> 
       <br />
       <br />
       <Card   header="friend"/>
    </>
  )
}

export default App
