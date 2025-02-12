import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Title from '../components/Title';
import Card from '../components/Card';
import Button from '../components/Button';
import { markAsVisited, unMarkAsVisited } from '../redux/placesSlice';

function PlaceDetail() {
  const { id} = useParams();
  const navigate = useNavigate();
  const handleGoBack =() => {
    navigate(-1);
  }
  const dispatch = useDispatch()
  const toggleVisitedStatus = (id,visited) => {
        if(visited) {
          dispatch(unMarkAsVisited(id))
        }else {
          dispatch(markAsVisited(id))
        }
      }
  const place = useSelector((state) => 
  state.places.cards.find((place) => place.id === parseInt(id)))
  return (
    <>
    <div className='container mx-auto'>
      <Title title="Place Details"/>
      <Button text="Go back" clickEvent={handleGoBack}/>
      {/* <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7'> */}
        <Card cardItem={place} isDetail={true} toggleVisitedStatus={toggleVisitedStatus}/>
      
      </div>
    </>
  )
}

export default PlaceDetail
