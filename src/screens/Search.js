import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const { data: countries } = useFetch(`v3.1/name/${name}`);

  return (
    <main className='dark:bg-slate-800'>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-between flex-wrap'>
          {countries?.map((country) => (
            <div key={country.name.common} className="max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 m-4">
              <img className="rounded-t-lg" src={country.flags.png} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country.name.common}</h5>
                <p className="font-normal text-gray-700 dark:text-white">Population: {country.population}</p>
                <p className="font-normal text-gray-700 dark:text-white">Region: {country.region}</p>
                <p className="font-normal text-gray-700 dark:text-white">Capital: {country.capital}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;