import React from 'react'

import logo from '../../assets/logo.png'
import userPic from "../../assets/user.png";

import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons/faSignIn';
import { faSave } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
  <div className="navbar bg-base-100 fixed top-0 w-10/12 z-10 shadow-xl">
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
    {
      user?(
  <div className="w-10 rounded-full">
        <img alt="User" src={user.photoURL} />
  </div>
)
:(
<div className="w-10 rounded-full">
       
  </div>
)}
  {user && <span className="text-red-600 mr-3">{user.displayName}</span>}

  {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-sm btn-outline btn-success text-md rounded-none"
          >
            Logout
          </button>
        ) : (
          <div className='flex'>
           
    <div className='tooltip tooltip-bottom tooltip-info' data-tip="Login Here"><Link to="/login"><button class="btn btn-outline btn-success"><FontAwesomeIcon icon={faSignIn}/> </button></Link></div>
    <div className='tooltip tooltip-bottom tooltip-info' data-tip="Registration Here"><Link to="/registration" className='ml-2'><button class="btn btn-outline btn-warning"><FontAwesomeIcon icon={faSave}/> </button></Link></div>
    </div>
  )}
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
