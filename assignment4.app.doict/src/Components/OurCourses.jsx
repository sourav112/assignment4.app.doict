import React, { useEffect, useState } from 'react'

const OurCourses=() => {
    const[courses, setCourses]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/course`)
        .then((res)=>res.json())
        .then((data)=>setCourses(data))
        

    },[]);
    console.log(courses);
  return (
    <div>
        <div>
        <div className='bg-blue-300 m-2'>
            <p className='items-center text-2xl p-2'>Our {courses.length} Courses</p>
        </div>
        <div className='grid md:grid-cols-3 space-x-3 sm: grid-cols-1'>
        {
            courses.map((course)=>(
                
                <div class="card bg-base-100 w-96 shadow-xl">
                <figure class="px-10 pt-10">
                    <img
                    src={course.img_url}
                    alt={course.assessments}
                    class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{course.title}</h2>
                    <p>{course.details}</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Get Details</button>
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