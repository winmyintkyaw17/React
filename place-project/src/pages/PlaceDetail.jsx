import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Title from '../components/Title';
import Card from '../components/Card';

function PlaceDetail() {
  const { id} = useParams();
  const place = useSelector((state) => 
  state.places.find((place) => place.id === parseInt(id)))
  return (
    <>
    <div className='container mx-auto'>
      <Title title="Place Details"/>
      {/* <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7'> */}
        <Card cardItem={place} isDetail={true}/>
      
      </div>
    </>
  )
}

export default PlaceDetail
