
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Button({text,startIcon, endIcon,onClick}) {
  return (
    <div onClick={onClick} className='bg-[#FFE300] font-bold text-[#FF009B] inline-block text-sm px-1 py-0.5 pb-1 rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-yellow-100 active:scale-95 shadow-sm hover:shadow-md'>
        {
            (startIcon && <span className='mr-1'>{startIcon}</span>)
        }
      {text}
      {(endIcon && <span className='ml-1'>{endIcon}</span>)}
      
    </div>
  )
}

export default Button
