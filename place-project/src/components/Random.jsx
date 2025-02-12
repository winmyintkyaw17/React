import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button';
import { markAsVisited, unMarkAsVisited } from '../redux/placesSlice';
import Card from './Card';

function Random() {
  const [randomPlaceId, setRandomPlaceId] = useState(null);
  const  places = useSelector((state) => state.places.cards);
  const dispatch = useDispatch();
  const toggleVisitedStatus = (id,visited) => {
        if(visited) {
          dispatch(unMarkAsVisited(id))
        }else {
          dispatch(markAsVisited(id))
        }
      }
  // const getRandomPlace = () => {
  //   const randomIndex = Math.floor(Math.random() * places.length);
  //   const randomPlaceItem = places[randomIndex];
  //   setRandomPlaceId(randomPlaceItem.id)
    
  // }
  const getRandomPlace = () => {
    if (places.length === 0) return; 
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * places.length);
    } while (places[randomIndex]?.id === randomPlaceId);

    const randomPlaceItem = places[randomIndex];
    setRandomPlaceId(randomPlaceItem.id);
  };
  const randomPlace = randomPlaceId ? places.find(place => place.id === randomPlaceId) : null;
  return (
    <>
      <Button text="Suggest random Places:" clickEvent={getRandomPlace}/>
      <div className='w-80 mx-auto'>
        {randomPlace && (
          <Card cardItem={randomPlace} toggleVisitedStatus={toggleVisitedStatus}/>
        )}
      </div>
    </>
  )
}

export default Random

