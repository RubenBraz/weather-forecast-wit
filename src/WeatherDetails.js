import React from 'react'
import {
    LocationTitle,
    Container,
    Card,
    Top,
    Bottom
  } from './StyledWeatherDetails'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

export const WeatherDetails = ({data, unit}) => {

    if (!data || !data.main || !data.weather) return null;
    

    return (
        <>
          <LocationTitle>{data.name}</LocationTitle>
          <Container>
            <Card>
              <Top>
                <div className='temp'>
                  <h1>
                    {data.main.temp.toFixed(0)} º{unit === 'metric' ? 'C' : 'F'}
                  </h1>
                </div>
                <div className='description'>
                  <p>{capitalizeFirstLetter(data.weather[0].description)}</p>
                </div>
              </Top>
              <Bottom>
                <div className='feels_like'>
                  <p>Sensação Térmica</p>
                  <p>
                    {data.main.feels_like.toFixed(0)} º{unit === 'metric' ? 'C' : 'F'}
                  </p>
                </div>
                <div className='min'>
                  <p>Mínima</p>
                  <p>
                    {data.main.temp_min.toFixed(0)} º{unit === 'metric' ? 'C' : 'F'}
                  </p>
                </div>
                <div className='max'>
                  <p>Máxima</p>
                  <p>
                    {data.main.temp_max.toFixed(0)} º{unit === 'metric' ? 'C' : 'F'}
                  </p>
                </div>
              </Bottom>
            </Card>
          </Container>
        </>
      )
}
