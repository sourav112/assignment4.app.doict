import React from 'react'
import banner from '../assets/banner.jpg'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='justify-center items-center mt-24'>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div className='content-center items-center text-center'>
        <p class="align-middle text-blue-600 text-2xl"> Welcome to Our Course Related Website.</p>
        <Link to="/courses" className="btn btn-xs btn-outline btn-primary sm:btn-sm  md:btn-md lg:btn-lg mt-5 mb-5" role='button'>Courses</Link>
        </div>
        
        <div className='content-end'>
            <img
            src={banner} 
            alt="banner" width="600" height="450"
            />
        </div>

    </div>
    </div>
  )
}
