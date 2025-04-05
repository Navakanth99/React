import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <h1>Hello from main</h1>
  )
}
const anotherElement =(
  <a href='https://google.com' target='_blank'>visit google</a>
)

const reactElement = React.createElement(
   'a',
   {href : 'https://google.com', target:'_blank'},
   'Hello')


createRoot(document.getElementById('root')).render(
 <App />
)
