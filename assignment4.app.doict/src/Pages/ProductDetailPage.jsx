import { faCartPlus, faCoffee, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom'

const ProductDetailPage=()=> {
const courseDetails=useLoaderData();

console.log(courseDetails);
const notify = () => toast.success(`${courseDetails.title} Successfully Added to Your Cart.`);
  return (
    <div className='border-2'>
        <br/>
        <br/>
        <br/>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className='m-5'>
        <div className='relative'>
            <img className='w-96'  src={courseDetails.img_url} alt="blog"/>
            <div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">${courseDetails.price}</div>
        </div>
        <div class="stats">
        <div class="stat place-items-center">
            <div class="stat-value text-4xl">{courseDetails.lession.slice(0,3)} Lesson</div>
            <div class="stat-desc text-2xl text-red-500">{courseDetails.duration}</div>
        </div>

        <div class="stat place-items-center">
            <div class="stat-value text-2xl text-blue-600">{courseDetails.level}</div>
            
        </div>
        </div>
        </div>
        <div className='m-5'>
            <img className='rounded-full' src={courseDetails.author_img_url} />
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{courseDetails.author}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{courseDetails.title}</h1>
            <p class="mb-3 text-justify">
                {courseDetails.details}
            </p>
            <div class="flex flex-wrap">
            <button className='btn btn-primary' onClick={notify}>
            <FontAwesomeIcon icon={faCartPlus} /> Add To Cart

            </button>
            <Toaster position='bottom-right' />
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <FontAwesomeIcon icon={faUser} /> {courseDetails.student}
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <FontAwesomeIcon icon={faStar} /> {courseDetails.ratings}
                </span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductDetailPage