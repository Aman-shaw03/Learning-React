import React from 'react'
import { forwardRef } from 'react'
import { useId } from 'react'

const Inputs = forwardRef(function Inputs({
    label,
    className = "",
    type = "text",
    ...props
}, ref){
    const id = useId()
    return(
        <div className='w-full'>
            {label && 
            <label 
             className='inline-block mb-1 pl-1'
             htmlFor ={id}>
                {label}
            </label>
            }
            <input 
             type={type}
             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
             {...props}
             ref={ref}
             id={id}/>
        </div>
    )
})

export default Inputs

// this is a child component which job is to give access of its state to the parent ..so how?
// parent will pass the ref to the child component while using it and that time this child component can give access of the state to the parent