import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from './index'
import authService from '../appwrite/auto'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {register, handleSubmit,formState:{errors}}=useForm();
    const[error,setError]=useState("");
    const[isError,setIsError]=useState(false);
    // console.log("login ", Math.random())
    const login= async(data)=>{
        setError(null);//clean errors
        // console.log("hii ikiki")
        try {
            const session=await authService.login(data);
            // console.log("ikiki kasinas ns")

            if (session) {
                const userData=await authService.getCurrentUser();
                console.log("jhvbdjbs",userData);
                if(userData) dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (error) {
            //error{code,message,type}
            setError(error.message);
            setIsError(true);
            console.log("hii ikiki error", error.message)

        }
    }
    return (
        <div className='flex items-center justify-center w-full' >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    {errors.email?.type === "required" && (<p className='text-black '>Email can't be Empty</p>)}

                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                        minLength:6
                    })}
                    />
                    {errors.password?.type==="minLength"&&(<p className='text-black'>password must be Greater then 6</p>)}
                    {errors.password?.type==="required"&&(<p className='text-black'>password can't be null</p>)}

                    <Button
                    type="submit"
                    className="w-full text-nowrap"
                    >Sign in</Button>
                </div>
            </form>
            </div>
        </div>
      )
}

export default Login
