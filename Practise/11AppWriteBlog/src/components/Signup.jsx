import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import authservices from '../appwrite/Auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Buttons, Logo , Inputs} from "./index"
import {login} from "../store/authSlice"

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("") //flushing out errors
        try {
            // naming is wrong
            const userData = await authservices.createAccount(data)
            if (userData) {
                const userData = await authservices.getCurrentUser()
                if(userData) dispatch(login(userData))
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
                    {/* // we are using our Inputs component which we created  */}
                    <Inputs
                     label = "Full Name: "
                     placeholder = "Enter your Name"
                     {...register("name", {
                        required: true,
                     })}/>
                    <Inputs 
                     type = "email"
                     placeholder = "Enter Your Email"
                     label = "Email: "
                     {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                        // validate is checking the email and test it ..if false || executes 
                     })} />
                     <Inputs
                      type = "password"
                      placeholder = "Enter your password"
                      label = "Enter Password: "
                      {...register("password",{
                        required: true,  
                      })}/>
                      {/* // we are using our Buttons component which we created  */}
                      <Buttons type='submit' className='w-full'>Create Account</Buttons>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup