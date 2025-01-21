import React from 'react'
import Card from './Card'

const cardItems = [
    {
        id: 1,
        name: "Place 1",
        image:
        "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 2,
        name: "Place 2",
        image:
        "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 3,
        name: "Place 3",
        image:
        "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 4,
        name: "Place 4",
        image:
        "https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 5,
        name: "Place 5",
        image:
        "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 6,
        name: "Place 6",
        image:
        "https://images.pexels.com/photos/3889987/pexels-photo-3889987.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 7,
        name: "Place 7",
        image:
        "https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 8,
        name: "Place 8",
        image:
        "https://images.pexels.com/photos/72479/pexels-photo-72479.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Popular Places",
        visited: false,
    },
]

function Cards() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7'>
      {
        cardItems.map((cardItem,index) => {
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
