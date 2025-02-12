import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { markAsVisited, unMarkAsVisited } from '../redux/placesSlice'



function Cards() {
    const places = useSelector((state) => state.places.cards)
    console.log(places)
    const dispatch = useDispatch()
    const toggleVisitedStatus = (id,visited) => {
      if(visited) {
        dispatch(unMarkAsVisited(id))
      }else {
        dispatch(markAsVisited(id))
      }
    }
    
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7'>
      {
        places.map((cardItem,index) => {
            return (
                <React.Fragment key={index}>
                    <Card cardItem={cardItem} toggleVisitedStatus={toggleVisitedStatus}></Card>
                </React.Fragment>
            )
        })
      }
      
    </div>
  )
}

export default Cards
