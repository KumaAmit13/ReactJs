import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// import Chai from './Chai.jsx'

function Chai(){
  return(<>
    <h1>inside main</h1>
  </>)
}

// const ReactElement = {//not working because react don't use this syntax for converting element into object
//   type: "a",
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit Google"


// };

// const anothetElement=(<a href='http://www.google.com'>click me</a>);//convert into object
  //react syntax

  let anothetUser="Chai and React"
const ReactElement=React.createElement(
  "a",
  {href: "https://googel.com",taget:"_blank"},
  "click me to visit google",
  anothetUser
)

createRoot(document.getElementById('root')).render(
  
    ReactElement
   
)
