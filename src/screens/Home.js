import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';

function Home({api}) {
  const {data:countries } = useFetch(api);

  return (
    <>
    <main className='dark:bg-slate-800'>
      <SearchBar />
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-between flex-wrap other:justify-evenly'>
          {countries?.map((country) => (
            <div className="max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 m-4">
            <Link to={`/countries/${country.name.common}`}>
                <img className="rounded-t-lg" src={country.flags.png} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/countries/${country.name.common}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country.name.common}</h5>
                </Link>
                <p className="font-normal text-gray-700 dark:text-white">Population: {country.population}</p>
                <p className="font-normal text-gray-700 dark:text-white">Region: {country.region}</p>
                <p className="font-normal text-gray-700 dark:text-white">Capital: {country.capital}</p>
            </div>
      </div>
          ))}
        </div>
      </section>
    </main>
    </>
  )
}

export default Home