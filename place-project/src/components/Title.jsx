import React from 'react'

function Title({title,customClass}) {
  return (
    <h1 className={`text-3xl font-bold text-gray-100 my-5 ${customClass} `}>{title}</h1>
  )
}

export default Title
