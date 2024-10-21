import React, { useState } from 'react'

import SeatsReseve from '../components/Reservation/SeatsReseve'
import AllSeats from '../components/Reservation/AllSeats'
import { useParams } from 'react-router-dom'
import HeroSection from '../components/Reservation/HeroSection';

export default function Reservation() {

  const [selectedSeats, setSelectedSeats] = useState([]);

  const {id} = useParams();
  return (
    <>
   
    <HeroSection id={id} />
    <SeatsReseve id={id} selectedSeats={selectedSeats}  setSelectedSeats={setSelectedSeats}/>
    <AllSeats id={id} selectedSeats={selectedSeats}  setSelectedSeats={setSelectedSeats} />
   
    </>
  )
}
