import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[Password,setPassword]=useState("");
  const[length,setLength] =useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);

  //use ref hook
  const passwordRef=useRef(null);
  const copyPasswordToClipBored=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,2);
    window.navigator.clipboard.writeText(Password);
  },[Password])


  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="1234567890";
    if(charAllowed) str+="~!@#$%^&*(){}[]`=+";
    for (let index = 1; index <= length; index++) {
      let char= Math.floor(Math.random()*str.length);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);
  
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
      <div className='h-40 bg-gray-800 max-w-md rounded-3xl p-2 flex flex-col gap-2 gap-y-5 justify-center'>
        <div><h3>Password Generator</h3></div>
        <div className=' h-min w-full flex'>
        <input type="text" 
        name="" 
        value={Password}
        id=""
        readOnly
        className='border-2 border-white w-80' 
        ref={passwordRef}/>

        <button className='h-14 w-28 bg-blue-500 ' onClick={copyPasswordToClipBored}>Copy</button>
        </div>
        <div className='flex gap-x-7'>
          <div>
          <input type="range" name="" id="" className='w-14'
          max={28}
          min={8}
          value={length}
          o ={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="" className='ml-3'>length {length}</label>
          </div>
          <div>
            <input type="checkbox" name="" id=""
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((pre)=>!pre);
            }} />
            <label htmlFor="">number</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" 
             defaultChecked={charAllowed}
             onChange={()=>{
               setCharAllowed((pre)=>!pre);
             }} />
            <label htmlFor="">Char</label>
          </div>
          
        </div>
       

      </div>
    </>
  )
}

export default App
