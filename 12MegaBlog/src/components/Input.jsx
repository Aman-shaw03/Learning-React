import React, {forwardRef, useId} from 'react'

// why use ForwardRef ? interview Question
// some times in a form , we use(create) a input component and use it in a form instead of creating again and again
// so whatever the value is in that components has to pass to the form page where we will take it into account 
// there we will forwardRef to give us that state 
// form page will pass the ref to the comp => then comp will pass the state to the form

/*common syntax (production Grade) */

// const Input  = forwardRef(function Input(){
//     return <h1>Test</h1>
// })

const Input = forwardRef(function Input({
    type = "text",
    label,
    className = "",
    ...props

},ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
                        className='inline-block mb-1 pl-1'
                        htmlFor={id}>
                            {label}
                    </label>}
            <input
            type={text}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
            ref={ref}
            {...props}
            id={id}/>
        </div>
    )
})

export default Input