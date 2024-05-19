import React from 'react';
import Switcher from './Switcher';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav className="border-gray-200 shadow bg-gray-50 dark:bg-gray-700 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                  <span className="self-center sm:text-sm md:text-2xl font-semibold whitespace-nowrap dark:text-white">Where in the world?</span>
                </Link>
                <div className='flex items-center justify-between'>
                  <div className='mr-2'><Switcher /></div><span className="sm:text-xs lg:text-base whitespace-nowrap dark:text-white">Dark Mode</span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header