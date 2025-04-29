import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

export const WeatherChart = ({dataDays, unit}) => {
    if (!dataDays || dataDays.length === 0) return null;
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={dataDays}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day"/>
          <YAxis unit=""/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp_min" stroke="#8884d8" name="Mínima" />
          <Line type="monotone" dataKey="temp_max" stroke="#82ca9d" name="Máxima" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
