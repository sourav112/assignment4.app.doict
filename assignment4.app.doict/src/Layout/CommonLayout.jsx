
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'

export default function CommonLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer />
    </div>
  )
}
