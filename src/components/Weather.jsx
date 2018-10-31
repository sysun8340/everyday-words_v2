import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/weather.css'
import axios from 'axios'


class Weather extends Component {

  componentWillMount () {
    const { city } = this.props
    const url = 'http://1t.weather.sojson.com/api/weather/city/' + city.city_code
    axios.get(url).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className='weather-home'>
        <section className='today'>
          <header className='date'>北京 24日 星期三</header>
          <div className='horizontalContainer'>
            <p className='left'>
              晴 <br/>
              温度：20℃ <br/>
              湿度：30% <br/>
              西北风 4-5级 <br/>
              pm2.5 40
            </p>
            <p className='right'>
              高温24℃ <br/>
              低温14℃ <br/>
              日出 4：50 <br/>
              日落 18：10 <br/>
              pm10 50
            </p>
          </div>
        </section>
        <hr/>
        <section className='temForcast'>
          未来4天温度变化....
          <div></div>
        </section>
        <hr/>
        <section className='demoForcast'>
          
          <div></div>
        </section>
      </div>
    )
  }
}

const mapState = state => ({
  city: state.city,
  weather: state.weather
})
export default connect(mapState)(Weather);