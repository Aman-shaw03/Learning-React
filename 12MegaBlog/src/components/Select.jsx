import React, {useId} from 'react'

function Select({
    option,
    label,
    className = "",
    ...props

}, ref) {
    const id = useId()
  return (
    <div className='w-full '>
        {label && <label htmlFor={id} className=''></label>}
        <select 
            {...props}
            id={id}
            ref={ref}
            className= {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                // now we need to loop on OPtions which is a array , but we dont know if the array option 
                //has any values or not , therefore conditional checks are there
                {option?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)