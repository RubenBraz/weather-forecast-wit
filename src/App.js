import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { WeatherDetails } from './WeatherDetails'
import { WeatherDays } from './WeatherDays'
import { WeatherChart } from './WeatherChart'
import {
  AppWrapper,
  Search,
  SearchInput,
  SearchButton,
  GlobalStyle
} from './StyledComponents'

function App() {
  const [location,setLocation] = useState('')
  const [data,setData] = useState({})
  const [dataDays,setDataDays] = useState([])
  const [error,setError] = useState(false)
  const [unit, setUnit] = useState('metric')

  useEffect(() => {
    if (location) {
      searchLocation();
    }
  }, [unit, location]);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value)
  }

  const searchLocation = async () => {
    try{
      const cityUrl = `${process.env.REACT_APP_BASE_URL}/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}&lang=pt`
    
      await axios.get(cityUrl).then((response) => {
        setError(false)
        setData(response.data)
        searchLocationDays()
      })

    }catch(error){
      console.log(error.message)
      setError(true)
    }
  }

  const searchLocationDays = async () => {
    try {
      const daysUrl = `${process.env.REACT_APP_BASE_URL}forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}&lang=pt`

      await axios.get(daysUrl).then((response) => {
        setError(false)
        const forecast = {}
        for(const[key,value] of Object.entries(response.data.list)){
          const day = value.dt_txt.slice(0,10)
          const temp_max = value.main.temp_max
          const temp_min = value.main.temp_min
          const description = value.weather[0].description

          if (!forecast[day]) {
            forecast[day] = {
              temp_max: temp_max,
              temp_min: temp_min,
              description: description
            };
          } else {
            forecast[day].temp_max = Math.max(forecast[day].temp_max, temp_max);
            forecast[day].temp_min = Math.min(forecast[day].temp_min, temp_min);
          }

        }
        const orderedForecast = Object.entries(forecast)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([day, data]) => ({ day, ...data }));
        
        setDataDays(orderedForecast)
      })
    } catch (error) {
      console.log(error.message)
      setError(true)
    }
  }

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Search>
          <SearchInput
            value={location}
            onChange={handleInputChange}
            placeholder="Inserir Cidade"
            type="text"
          />
          <SearchButton onClick={searchLocation}>Pesquisar</SearchButton>
          <SearchButton onClick={toggleUnit}>
            {unit === 'metric' ? '°C' : '°F'}
          </SearchButton>
        </Search>

        {!error && data.main && <WeatherDetails data={data} unit={unit} />}
        {!error && dataDays && <WeatherDays dataDays={dataDays} unit={unit} />}
        {!error && dataDays && <WeatherChart dataDays={dataDays} unit={unit} />}
      </AppWrapper>
    </>
  );
}

export default App;
