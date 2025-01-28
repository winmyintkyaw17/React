import React, { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Cards from '../components/Cards'
import Card from '../components/Card'

const cardItems = [
  {
    id: 1,
    name: "Place 1",
    image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Popular Places",
    visited: false,
  }]

function PlaceList() {
  const [random,setRandom] = useState(false);
  const handleClick = () => {
    setRandom(true);
  }
  return (
    <div className='container mx-auto'>
          <Title customClass="mt-10" title="Historical Places"/>
          <Button onClick={handleClick} text={"Suggest Random Place"}/>
          {random && (
            <div className='my-5'>
              <Title title={"Suggested Place"}/>
              <Card cardItem={cardItems[0]}/>
              </div>
          )}
          <Title customClass="mt-5" title="All Historical Places"/>
          <Cards/>
          
      </div>
  )
}

export default PlaceList
