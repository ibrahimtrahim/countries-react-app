import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";

function CountryDetail() {
  const {name} = useParams();
  const [data, setData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountry() {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const countryData = data[0];
        setData(countryData);

        if (countryData.borders) {
          const borderPromises = countryData.borders.map((borderCode) =>
            axios.get(`https://restcountries.com/v3.1/alpha/${borderCode}`)
          );
          const borderResponses = await Promise.all(borderPromises);
          const borderCountryNames = borderResponses.map((res) => res.data[0].name.common);
          setBorderCountries(borderCountryNames);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCountry();
  }, [name]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const nativeName = data.name.nativeName ? Object.values(data.name.nativeName)[0].common : data.name.common;
  const currencies = data.currencies ? Object.values(data.currencies).map(currency => currency.name).join(", ") : "N/A";
  const languages = data.languages ? Object.values(data.languages).join(", ") : "N/A";

  return (
    <main className="dark:bg-slate-800 p-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <button onClick={() => navigate(-1)} className="my-10 flex items-center text-sm dark:bg-gray-700 dark:text-white rounded shadow dark:border-gray-600 px-6 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 mr-2"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        Back
      </button>
      </div>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-md">
          <img src={data.flags.svg} alt={`${data.name.common} flag`} />
        </div>
        <div className="max-w-2xl other:mt-8 other:text-left text-gray-700 dark:text-white">
          <h3 className="text-2xl font-bold mb-4 other:text-left text-center lg:text-left">{data.name.common}</h3>
          <div className="flex justify-around other:justify-start flex-wrap other:gap-10 gap-20">
            <div>
              <p className="mb-2 text-sm">Native Name: <span className="text-Slate-400">{nativeName}</span></p>
              <p className="mb-2 text-sm">Population: <span>{data.population.toLocaleString()}</span></p>
              <p className="mb-2 text-sm">Region: <span>{data.region}</span></p>
              <p className="mb-2 text-sm">Sub Region: <span>{data.subregion}</span></p>
              <p className="mb-2 text-sm">Capital: <span>{data.capital}</span></p>
            </div>
            <div>
              <p className="mb-2 text-sm">Top Level Domain: <span>{data.tld[0]}</span></p>
              <p className="mb-2 text-sm">Currencies: <span>{currencies}</span></p>
              <p className="mb-2 text-sm">Languages: <span>{languages}</span></p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
            <h4 className="text-sm mb-2 mt-8">Border Countries:
              {borderCountries.length > 0 ? (
                borderCountries.map((borderCountry, index) => (
                  
                  <span key={index} className="text-sm dark:bg-gray-700 shadow dark:border-gray-600 px-4 py-1 mx-2">
                    {borderCountry}
                  </span>
                  
                ))
              ) : (
                <p className="text-sm">None</p>
              )}
              </h4>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default CountryDetail