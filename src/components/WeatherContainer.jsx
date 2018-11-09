import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Weather from './Weather'
import ErrorMsg from './ErrorMsg'
import { setWeather, setCity, setError, setRequestResult } from '../actions'

class WeatherContainer extends Component {
  
  fetchWeatherByCity = (cityCode, dispatch) => {
    const url = 'http://t.weather.sojson.com/api/weather/city/' + cityCode
    axios.get(url).then(res => {
      dispatch(setRequestResult(true))
      dispatch(setWeather({...res}))
    }).catch(err => {
      dispatch(setRequestResult(false))
      dispatch(setError('网络请求失败，服务器可能不支持此城市查询！'))
    })
  }

  componentWillMount () {
    const { city, dispatch } = this.props
    this.fetchWeatherByCity(city.city_code, dispatch)
  }

  render() {
    const { requestResult } = this.props
    if(!requestResult) {
      return <ErrorMsg {...this.props} fetchWeatherByCity={this.fetchWeatherByCity}/>
    }
    return <Weather {...this.props} fetchWeatherByCity={this.fetchWeatherByCity}/>
  }
}

const mapState = state => ({
  city: state.city,
  weather: state.weather,
  requestResult: state.requestResult,
  errorMsg: state.errorMsg
})
export default connect(mapState)(WeatherContainer)