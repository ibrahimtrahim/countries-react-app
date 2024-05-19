import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [isOpen, setIsOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm) {
        navigate(`/search?name=${searchTerm}`);
      }
    };

  return (
    <section className='max-w-screen-xl flex flex-wrap items-center lg:justify-between mx-auto p-4'>
      <form onSubmit={handleSubmit} className='w-full md:w-2/5'>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id="search-navbar" className="block mb-8 p-2 ps-10 text-sm text-gray-900 rounded-md hover:shadow bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a country..." />
      </form>
      <div>
        <button onClick={()=> setIsOpen((prev) => !prev)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="relative text-gray-700 bg-gray-50 rounded-md shadow text-sm px-5 py-2.5 text-left inline-flex items-center dark:bg-gray-700 dark:text-white dark:focus:ring-blue-800" type="button">Filter by Region
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>

        {!isOpen && <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-1">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <Link to="/countries/africa" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Africa</Link>
        </li>
        <li>
          <Link to="/countries/america" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">America</Link>
        </li>
        <li>
          <Link to="/countries/asia" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asia</Link>
        </li>
        <li>
          <Link to="/countries/europe" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Europe</Link>
        </li>
        <li>
          <Link to="/countries/oceania" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Oceania</Link>
        </li>
      </ul>
    </div>
        }
        </div>
      </section>
  )
}

export default SearchBar