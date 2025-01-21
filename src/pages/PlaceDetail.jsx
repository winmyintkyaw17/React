import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card';

const cardItems = [
  {
      id: 1,
      name: "Place 1",
      image:
      "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Popular Places",
      detail: "One of the famous places, blah blah",
      visited: false,
  },
  {
      id: 2,
      name: "Place 2",
      image:
      "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Popular Places",
      detail: "Two of the famous places, blah blah",
      visited: false,
  },
  {
      id: 3,
      name: "Place 3",
      image:
      "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Popular Places",
      detail: "three of the famous places, blah blah",
      visited: false,
  },
  {
      id: 4,
      name: "Place 4",
      image:
      "https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Popular Places",
      detail: "four of the famous places, blah blah",
      visited: false,
  },
  {
      id: 5,
      name: "Place 5",
      image:
      "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Popular Places",
      detail: "Five of the famous places, blah blah",
      visited: false,
  },
  {
      id: 6,
      name: "Place 6",
      image:
      "https://images.pexels.com/photos/3889987/pexels-photo-3889987.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Popular Places",
      detail: "Six of the famous places, blah blah",
      visited: false,
  },
]

function PlaceDetail() {
  const {id} =useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const cardItem = cardItems.find((item) => item.id === parseInt(id));
  
  return (
    <div className='container mx-auto'>
      
      <Title customClass="text-center" title="Place Details "/>
      <Button onClick={goBack} text={"Go Back"} startIcon={<FontAwesomeIcon icon={faArrowLeft} />}/>
      <div className='bg-[#9cff09] p-2 rounded-md text-center max-w-xs mx-auto'>
      <div className="relative overflow-hidden" style={{ aspectRatio: '9 / 16' }}>
    <img src={cardItem.image} className='w-full h-full object-cover' alt='img' />
  </div>
        <div className='text-[#FF009B]  text-lg'>
            <h3 className='mt-3 font-bold text-xl'>{cardItem.name}</h3>
            
            <p>{cardItem.description}</p>
            <p>{cardItem.detail}</p>
            {/* <h5 className='my-3 text-[#001CFF] font-bold'>{cardItem.status}</h5> */}
        </div>
        </div>
                    
              
    </div>
  )
}

export default PlaceDetail
