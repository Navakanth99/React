import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
     <div className='w-full h-screen duration-200' 
     style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
          style={{backgroundColor:"red"}} onClick={() => setColor("red")}>red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
          style={{backgroundColor:"black"}} onClick={() => setColor("black")}>black</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
          style={{backgroundColor:"green"}} onClick={() => setColor("green")}>green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
          style={{backgroundColor:"orange"}} onClick={() => setColor("orange")}>orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
          style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
          style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>blue</button>
        </div>
      </div>
     </div>
  )
}

export default App
