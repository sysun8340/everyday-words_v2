import React, { Component } from 'react'
import cityData from '../city.json'
import '../style/city.css'

class City extends Component {

  onChange = city_code => {
    
  }
  render() {
    const validCities = cityData.filter(city => city.city_code !== '')

    return (
      <div>
        <p>当前城市：{' 北京'}</p>
        <p>城市选择</p>
        <select 
          name="city" 
          className='select'
          onChange={() => {}}
        >
          {validCities.map((city, index) => (
            <option value={city.city_code} key={index}>
              {city.city_name}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default City