import React from 'react'
import {
    ContainerDays,
    CardDay,
    Top,
    Description,
    Bottom
  } from './StyledWeatherDays'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function readableDate(string){
    const day = string.slice(8,10)
    const month = string.slice(5,7)

    return day+'/'+month
}

export const WeatherDays = ({dataDays, unit}) => {

    if (!dataDays || dataDays.length === 0) return null;

    return (
        <ContainerDays>
          {dataDays.slice(1, 6).map((dayData, index) => (
            <CardDay key={index}>
              <Top>
                <div className='temp-days'>
                  <h1>{readableDate(dayData.day)}</h1>
                </div>
                <Description>
                  <p>{capitalizeFirstLetter(dayData.description)}</p>
                </Description>
              </Top>
              <Bottom>
                <div className='min-days'>
                  <p>Mínima</p>
                  <p>{dayData.temp_min.toFixed(0)} º{unit === 'metric' ? 'C' : 'F'}</p>
                </div>
                <div className='max-days'>
                  <p>Máxima</p>
                  <p>{dayData.temp_max.toFixed(0)} º{unit === 'metric' ? 'C' : 'F'}</p>
                </div>
              </Bottom>
            </CardDay>
          ))}
        </ContainerDays>
      )
}
