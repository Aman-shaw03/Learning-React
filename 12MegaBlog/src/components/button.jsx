import React from 'react'

function button({
    children,
    type = "button",
    bgcolor = "bg-color-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${className} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default button