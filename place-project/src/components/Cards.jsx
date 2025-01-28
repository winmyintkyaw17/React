import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'



function Cards() {
    const places = useSelector((state) => state.places)
    
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7'>
      {
        places.map((cardItem,index) => {
            return (
                <React.Fragment key={index}>
                    <Card cardItem={cardItem}></Card>
                </React.Fragment>
            )
        })
      }
      
    </div>
  )
}

export default Cards
