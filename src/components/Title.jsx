import React from 'react'

export default function Title({children,id}) {
  return (
    <div id={id&&id} className='p-20' >
        <h1 className='text-center text-xl font-medium'>
        {children}
        </h1>
      </div>
  )
}
