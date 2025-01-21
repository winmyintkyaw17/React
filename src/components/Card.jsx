import React from 'react'
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Card({cardItem}) {
    const {id,name,image,description,visited} = cardItem;
    const status = visited ? "Not Visited" : "Visited";
  return (
    <div className='bg-[#9cff09] p-2 rounded-md text-center max-w-xs mx-auto'>
      <div className="relative overflow-hidden" style={{ aspectRatio: '9 / 16' }}>
    <img src={image} className='w-full h-full object-cover' alt='img' />
  </div>
        <div className='text-[#FF009B]  text-lg'>
            <h3 className='mt-3 font-bold text-xl'>{name}</h3>
            
            <p>{description}</p>
            <h5 className='my-3 text-[#001CFF] font-bold'>{status}</h5>
        </div>
        <div className='flex justify-between '>
        <Button text={"Save as Visited"} startIcon={<FontAwesomeIcon icon={faLocationDot} />}/>
        <Link to={`/${id}`}>
          <Button text={"Detail"} endIcon={<FontAwesomeIcon icon={faArrowRight} />}/>

        </Link>
        </div>
    </div>
  )
}

export default Card
