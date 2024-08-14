// we gonna create a Modular Login component
//Practise React Hook from here.. must check
import React, {useState} from 'react'
import {Buttons, Inputs, Logo} from "./index"
import authservices from "../appwrite/Auth"
import {login as authLogin} from "../store/authSlice"
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import {Link, useNavigate} from "react-router-dom"


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()
    // so this handlesubmit is  a method which calls event but more of a syntax functionality to add data to regsiter
    // so to actually add data on onclick we have to create a separate method

    const login = async(data) => {
        setError("") // flushing out old errors
        try {
            const session = await authservices.logIn(data)
            if (session) {
                const userData = await authservices.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                    navigate("/") // if successfully dispatch login , then navigate to Home
                    // basically authservices se login kia , get current user se userdata lia then finally authslice ka suthLogin se log in kia
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
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            {/* // if any error happen, display here */}
            <form className = "mt-8" onSubmit={handleSubmit(login)}>
                <div className='space-y-5'>
                    {/* // we have to spread register for every particular Inputs components or data will overwrite
                    // we are using our Inputs component which we created  */}
                    <Inputs 
                     type = "email"
                     placeholder = "Enter Your Email"
                     label = "Email: "
                     {...register("email", {
                        required: true,
                        validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a Valid Address"
                        // validate is checking the email and test it ..if false || executes 
                     })} />
                     <Inputs
                     label = "Password: "
                     placeholder = "Enter your password"
                     type = "password"
                     {...register("password", {
                        required: true
                     })}/>
                     {/* // we are using our Buttons component which we created  */}
                    <Buttons
                    type='submit'
                    className='w-full'
                    >Log In
                    </Buttons>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login