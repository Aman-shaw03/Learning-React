import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import authservice from "../appwrite/auth"
import { logIn as authLogIn } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useForm} from "react-hook-form"




function LogIn() {
    const [error , setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    // in useForm we get register and handleform => which is not function but rather a "keyword" and event 
    // so still we have to create a handlesubmit method pass it to onSubmit={handlesubmit(login)}
    // so it will pick the data from those input field into the register and we dont have to keep state 

    const login = async(data) => {
        setError("")
        try {
            const session = await authservice.logIn(data)
            if (session){
                const userData = await authservice.getCurrentUser()
                if (userData) dispatch(authLogIn(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
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
                    type= "email"
                    placeholder = "Enter your Email"
                    {...register("email",{
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a Valid Address"
                        }
                    })}
                    />
                    {/* // syntax to use "register"
                    // its compulsory to spread our register value in every components or else same value 
                    //will got overwrite and unique name should be give like this "email" */}
                    <Input
                    label= "Password: "
                    type="password"
                    placeholder="Enter your Password"
                    {...register("password",{
                        required: true
                    })}
                    />
                    <Button
                    type='submit'
                    className='w-full'
                    >Sign In</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogIn