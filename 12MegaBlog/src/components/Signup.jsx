import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import  authservice  from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import {Button, Input, Logo} from "./index"
import { useDispatch } from 'react-redux'
import { logIn } from '../store/authSlice'

function Signup() {
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        // Good practise to empty our prev errors
        try {
            const userData = await authservice.createAccount(data)
            if(userData){
                const userData = await authservice.getCurrentUser()
                if(userData) dispatch(logIn(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }



  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label= "Full Name: "
                        placeholder= "Enter your full name"
                        {...register("name",{
                            required:true
                        })}>

                        </Input>
                        <Input
                        label="Email: "
                        type="email"
                        placeholder="Enter your Email"
                        {...register("email",{
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",}
                        })}>
                        </Input>
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your Password"
                        {...register("password",{
                            required:true
                        })}>
                        </Input>
                        <Button type='submit' className='w-full'>Create Account</Button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Signup