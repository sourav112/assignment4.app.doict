import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSignIn } from '@fortawesome/free-solid-svg-icons/faSignIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Loginpage() {
  return (
    <div className='flex items-center justify-center'>
      <div class="dark:bg-gradient-to-l from-gray-900 to-gray-600 flex justify-center items-center w-screen h-screen p-5">
    <div class="bg-white shadow-md dark:shadow-gray-600 rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3 dark:bg-gray-800">
        <h1 class="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-200">Login Here</h1>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" for="email">
                    Email <span class="text-red-500">*</span>
                </label>
                <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="email" type="email" placeholder="Email"/>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" for="password">
                    Password <span class="text-red-500">*</span>
                </label>
                <input class="shadow appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="password" type="password" placeholder="******************"/>
            </div>
            <div class="items-center justify-between">
                <button class="btn btn-primary w-full" type="button">
                <FontAwesomeIcon icon={faSignIn}/> Login
                </button>
                <button class="btn btn-ghost btn-outline w-full mt-2" type="button">
                <FontAwesomeIcon icon={faGoogle}/> Continue With Google
                </button>
                <button class="btn btn-ghost btn-outline w-full mt-2" type="button">
                <FontAwesomeIcon icon={faGithub}/>Continue With Github
                </button>
                <p>
                  Not Have an Account? Please <Link to="/registration"> <span className='text-blue-600'>Register</span> </Link>
                </p>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}
