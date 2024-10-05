import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
  <div className="navbar bg-base-100 fixed top-0 w-3/4 z-10">
  <div className="navbar-start">
      <Link to="/" className='flex gap-2 justify-center items-center'>
          <img src={logo} alt="logo" width="40" height="20" />
          <span>Hero</span>
      </Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-4">
      <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
      <li><NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Courses</NavLink></li>
    </ul>
  </div>
  <div class="navbar-end gap-4">
    <button class="btn btn-outline btn-success">Login</button>
    <button class="btn btn-outline btn-warning">Register</button>

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active text-red-500 bg-orange-300" : ""}>Home</NavLink></li>
        <li><NavLink to="/courses" className={({ isActive }) => isActive ? "active text-red-500 bg-orange-300" : ""}>Courses</NavLink></li>
      </ul>
    </div>
  </div>
</div>
  )
}
