
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Button({text,startIcon, endIcon,...customProps}) {
  const {clickEvent} = customProps;
  return (
    <div onClick={clickEvent} className='bg-[#FFE300] font-bold text-[#2f4858] inline-block text-sm px-2 py-0.5 pb-1 rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-yellow-400 active:scale-95 shadow-sm hover:shadow-md'>
        {
            (startIcon && <span className='mr-1'>{startIcon}</span>)
        }
      {text}
      {(endIcon && <span className='ml-1'>{endIcon}</span>)}
      
    </div>
  )
}

export default Button
