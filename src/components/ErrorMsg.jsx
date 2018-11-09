import React, { Component } from 'react'

class ErrorMsg extends Component {
  render() {
    const { errorMsg, fetchWeatherByCity, weather, dispatch } = this.props
    return (
      <div>
        <p style={{textAlign: 'center', marginBottom: '40px'}}>{errorMsg}</p>
        <div style={{textAlign: 'center'}}>
          <button
            onClick={() => {
              fetchWeatherByCity(weather.data.cityInfo.cityId, dispatch)
            }}
          >
            返回
          </button>
        </div>
      </div>
    )
  }
}

export default ErrorMsg