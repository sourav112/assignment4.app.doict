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
    <div className='mt-10 p-5 flex items-center justify-center'>
        <div class="p-4 max-w-md">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className='relative'>
            <img class=" w-full object-cover object-center" width="300" height="300" src={courseDetails.img_url} alt="blog"/>
            <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">${courseDetails.price}
        </div>
        </div>
        <div class="stats shadow">
        <div class="stat place-items-center">
            <div class="stat-value text-4xl">{courseDetails.lession}</div>
            <div class="stat-desc text-2xl text-red-500">{courseDetails.duration}</div>
        </div>

        <div class="stat place-items-center">
            <div class="stat-value text-2xl text-blue-600">{courseDetails.level}</div>
            
        </div>
        </div>
        <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{courseDetails.author}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{courseDetails.title}</h1>
            <p class="leading-relaxed mb-3 text-justify">
                {courseDetails.details}
            </p>
            <div class="flex items-center flex-wrap">
            <button className='m-4 btn btn-primary' onClick={notify}>
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
    </div>
  )
}

export default ProductDetailPage