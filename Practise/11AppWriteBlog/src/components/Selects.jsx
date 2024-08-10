// this components is created for the dropdown thing in our project which show active or inactive
// new and easy syntax of ForwardRef
import React, {useId} from 'react'

function Selects({
    className = "",
    label,
    options,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label> }
        <select  
         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
         id={id}
         {...props}
         ref={ref}
        >
            {options?.map((option) => (<option key={option} value={option}>
                {option}
            </option>))}
        </select>
    </div>
  )
}

export default React.forwardRef(Selects)
// this is the new syntax , just wrap it in the end 