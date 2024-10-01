import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PoemItem({title, author, lines, linecount}) {
    const navigate  = useNavigate();

  const handleClick = (title) => {
    navigate(`/poem/${title}`);
  };
  return (
    <>
    <div onClick={() => handleClick(title)} 
                    className='border border-stone-400 
                            rounded-md text-center 
                            cursor-pointer p-8 bg-transparent 
                            text-stone-700'>
                                <p>{title}</p>
                                <span>{linecount} lines</span>
      </div>
    </>
  )
}
