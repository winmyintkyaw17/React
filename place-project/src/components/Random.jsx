import React from 'react';
import Card from './Card';

const randomCard = {
  id: 3,
  name: "Place 3",
  image: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=400",
  description: "Popular Places",
  visited: false,
};

function Random() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-5">Random Card</h1>
      {/* Display the Card component */}
      <Card cardItem={randomCard} />
    </div>
  );
}

export default Random;
