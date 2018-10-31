import React, { Component } from 'react'
import cityData from '../city.json'
import '../style/city.css'
import { connect } from 'react-redux'

class City extends Component {

  getCityByCityCode = (cityCode, cities) => cities.find(city => city.city_code === cityCode)

  onCityChange = (cityCode, cities) => dispatch => {
    const city = this.getCityByCityCode(cityCode, cities)
    dispatch({
      type: 'CITY_CHANGE',
      city: city
    })
  }
    
  

  render() {
    const validCities = cityData.filter(city => city.city_code !== '')
    const { city, dispatch } = this.props
    
    return (
      <div className='city'>
        <p>当前城市：{city.city_name}</p>
        <p>城市选择</p>
        <select 
          name="city" 
          className='select'
          onChange={(e) => {
            dispatch(this.onCityChange(e.target.value, validCities))
          }}
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

const mapState = state => ({
  city: state.city
})
export default connect(mapState)(City)