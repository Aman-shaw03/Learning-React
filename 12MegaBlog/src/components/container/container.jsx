import React from 'react'

function Container({children}) {
  return (
    <div className='w-full mx-auto px-4 max-w-7xl'>{children}</div>
  )
}
// Now this works as a CSS container, if we have to change CSS property of some items , we just have to change this CSS container

export default Container