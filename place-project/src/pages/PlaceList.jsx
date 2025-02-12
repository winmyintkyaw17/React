import React, { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Cards from '../components/Cards'
import Card from '../components/Card'
import Random from '../components/Random'



function PlaceList() {
  
  
  return (
    <div className='container mx-auto'>
          <Title customClass="mt-10" title="Historical Places"/>
          
          <Random />
          <Title customClass="mt-5" title="All Historical Places"/>
          <Cards/>
          
      </div>
  )
}

export default PlaceList
