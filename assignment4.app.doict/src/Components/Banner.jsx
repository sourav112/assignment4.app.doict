import React from 'react'
import banner from '../assets/banner.jpg'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='grid grid-cols-2 justify-center items-center mt-10'>
        <div className=''>
        <p class="align-middle text-blue-600 p-5"> Welcome to Our Course Related Website.</p>
        <Link to="/courses" className="btn btn-info w-32 " role='button'>Courses</Link>
        </div>
        
        <div className="">
            <img
            src={banner} 
            alt="banner" width="500" height="500"
            />
        </div>

    </div>
  )
}
