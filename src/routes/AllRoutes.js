import {Routes, Route } from 'react-router-dom';
import  Home  from '../screens/Home.js';
import  Search from '../screens/Search.js';
import CountryDetail from '../screens/CountryDetail.js';
import PageNotFound from '../screens/PageNotFound.js';


function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home api='v3.1/all' />} />
            <Route path="countries/:name" element={<CountryDetail />} />
            <Route path="countries/africa" element={<Home api='v3.1/region/africa' />} />
            <Route path="countries/america" element={<Home api='v3.1/region/america' />} />
            <Route path="countries/asia" element={<Home api='v3.1/region/asia' />} />
            <Route path="countries/europe" element={<Home api='v3.1/region/europe' />} />
            <Route path="countries/oceania" element={<Home api='v3.1/region/oceania' />} />
            <Route path="search" element={<Search />} />
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes