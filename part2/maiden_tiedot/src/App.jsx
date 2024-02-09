import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CountryFilter from "./components/CountryFilter";

function App() {
  const [countries, setCountries] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter) {
      axios
        .get(`https://restcountries.com/v3.1/name/${filter}`)
        .then((response) => {
          setCountries(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
          setCountries([]);
        });
    }
  }, [filter]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <form>
        <label>find countries: </label>
        <input value={filter} onChange={handleChange} />
        <CountryFilter countries={countries} filter={filter} />
      </form>
    </>
  );
}

export default App;
