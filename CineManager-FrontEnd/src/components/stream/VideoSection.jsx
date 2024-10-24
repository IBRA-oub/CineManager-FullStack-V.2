import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
// import streamVideo from '../../assets/images/streamVideo.mp4';

export default function VideoSection({ film }) {

  return (
    <>

      <div className='w-full h-full '>
        <Link to="/">
          <div id="backHome" className='absolute top-0 left-3 w-10 h-10 z-10   bg-cover bg-center' style={{ backgroundImage: `url(${logo})` }} >
          </div>

        </Link>
        <video id="videoStream" controls className='w-full h-full' src={film.video} type="video/mp4" />
      </div>


    </>
  )
}
