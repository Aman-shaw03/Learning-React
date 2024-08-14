import React from 'react'

export default function Buttons({
    children,
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    type = "button",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`} {...props}>
        {children}
    </button>
  )
}
// basically created a reuseable component for button which take args as a children for button name parameter
// some styles are given defaul values, we also props just in case someone wanted to pass more attributes.
