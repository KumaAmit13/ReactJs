import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const{register,handleSubmit,formState:{errors}}=useForm();
  // let userdata={};
  const onSubmit=(data)=>{
    // userdata=data;
    console.log(data);
  }
  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="1">email : </label>
      <input type="text" id='1' name='email' {...register("email",{
        required:true,
        minLength:5,
      })}
      />
      {errors.email&&(<p>checke your email</p>)}
      <br/>
      <br/>
      <br/>
      <label htmlFor="2">Password : </label>

      
      <input type="password" id='2' name='password' {...register("password",{
        required:true,
        minLength:4
      })}/>
      {errors.password?.type==="minLength"&&(<p>Passwored length must be greter then 4</p>)}
      {errors.password?.type==="required"&&(<p>Passwored can't be empty</p>)}
      

        <br/>
        <br/>
        <br/>
      <button type="submit">submit</button>
     </form>
    </>
  )
}

export default App
