import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (api) => {

    const [data, setData] = useState([]);
    const url = `https://restcountries.com/${api}`;

    useEffect(() => {
      async function fetchCountries() {
        try {
          const { data } = await axios.get(url);
          setData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchCountries();
    }, [url]);

  return {data}
}

export default useFetch 