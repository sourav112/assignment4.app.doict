
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const OurCourses=() => {
    const[courses, setCourses]=useState([]);
    useEffect(()=>{
        fetch(
            `https://assignment4serverdoict.vercel.app/course`
        )
        .then((res)=>res.json())
        .then((data)=>setCourses(data))
        .catch(function(error) {
            console.log('Error',error)
    })

        

    },[]);
    console.log(courses);
  return (
    <div>
        <div>
        <div className='border-b-2 m-2 border-blue-600 mt-16'>
            <p className='text-center text-2xl p-2'>Our {courses.length} Courses</p>
        </div>
        <div className='grid md:grid-cols-3 space-x-2 m-10 sm: grid-cols-1'>
        {
            courses.map((course)=>(
                
                <div class="card bg-base-100 shadow-xl mt-5">
                <figure class="px-10 pt-10">
                    <img
                    src={course.img_url}
                    alt={course.assessments}
                    width="150"
                    height="150"
                    class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{course.title}</h2>
                    
                        <p className='text-justify'>{course.details.slice(0,100)}</p>
                    
                    
                    <div class="card-actions">

                    <Link to={`/course/${course.course_id}`}><button class="btn btn-primary"><FontAwesomeIcon icon={faEye}/> Get Details</button></Link>
                    </div>
                </div>
                </div>

               

            ))
        }
         </div>
    </div>

    </div>
  )
}
export default OurCourses;