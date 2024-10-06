import React from 'react'

export default function HowWorks() {
  return (
    <div>
        <div className='bg-blue-300 m-2'>
            <p className='text-center text-2xl p-2'>How Our Website Works</p>
        </div>
        <div className='grid md:grid-cols-3 space-x-3 sm: grid-cols-1'>
        <div class="card bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="https://img.freepik.com/premium-vector/enroll-now-label_686319-576.jpg"
      alt="Enroll"
      width="100"
      height="100"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">How to Enroll</h2>
    <p className='text-justify'>To insert, register, or enter in a list, catalog, or roll. the school enrolls about 800 pupils.To to prepare a final perfect copy of (a bill passed by a legislature) in written or printed form</p>
    <div class="card-actions">
      <button class="btn btn-primary">Check Here</button>
    </div>
  </div>
</div>
<div class="card bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="https://www.computerhope.com/jargon/m/method.jpg"
      alt="Routine"
      width="100"
      height="100"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Course Routine</h2>
    <p className='text-justify'>Classroom routines are rituals or actions that are repeated time and time again. These routines that are repeated regularly provide students with a sense of security because they know what is expected of them.</p>
    <div class="card-actions">
      <button class="btn btn-primary">Check Here</button>
    </div>
  </div>
</div>
<div class="card bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="https://d22bbllmj4tvv8.cloudfront.net/d5/c0/efaeb96d41e3a674f8d2ed576bed/what-is-mentoring1-square.jpg"
      alt="Mentor"
      width="100"
      height="100"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Our Mentors</h2>
    <p className='text-justify'>Learning mentors help pupils who are experiencing difficulty at school. They work with students to tackle specific problems and to improve achievement levels. For example, they might work with a regular truant to increase punctuality.</p>
    <div class="card-actions">
      <button class="btn btn-primary">Check Here</button>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}
