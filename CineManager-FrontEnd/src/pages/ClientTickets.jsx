import React from 'react'
import Navbar from '../components/Client/navbar'
import AllTickets from '../components/Client/AllTickets'



export default function ClientTickets() {
  return (
    <>

      <div className='md:flex'>
        <div className='md:w-[15%] md:h-screen md:border '>
          <Navbar />
        </div>
        <div className='md:w-[85%] md:h-full'>
          <AllTickets />
        </div>
      </div>
    </>

  )
}
