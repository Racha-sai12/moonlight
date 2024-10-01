import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function PoetItem({name}) {
  const navigate  = useNavigate();

  const handleClick = (name) => {
    navigate(`/author/${name}`);
  };
  return (
          <>
          <div onClick={() => handleClick(name)} className='border border-stone-400 rounded-md text-center cursor-pointer p-8 bg-transparent text-stone-700'>{name}
            </div>
          </>
    
  )
}
