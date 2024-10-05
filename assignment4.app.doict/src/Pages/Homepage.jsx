import React from 'react'
import Banner from '../Components/Banner'
import HowWorks from '../Components/HowWorks'
import OurCourses from '../Components/OurCourses'
import ContactUs from '../Components/ContactUs'
import AboutUs from '../Components/AboutUs'

export default function Homepage() {
  return (
    <div>
        <Banner/>
        <HowWorks/>
        <OurCourses/>
        <ContactUs/>
        <AboutUs/>
    </div>
  )
}
