import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { WhiteSpace, Card, WingBlank,  PullToRefresh } from 'antd-mobile'
import '../style/weather.css'
import choiceImg from '../images/choice.gif'
import cityImg from '../images/city.gif'

class Weather extends Component {

  state = {
    // refreshing: false,
    height: document.documentElement.clientHeight 
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei - 40
    }), 0);
  }

  render() {
    const { fetchWeatherByCity, dispatch, weather, city, isTabChange } = this.props
    return (
      <div className='weather'>
        <PullToRefresh
          damping={60}
          ref={el => this.ptr = el}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          distanceToRefresh={25}
          // indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
          direction={ isTabChange ?'up' : 'down' }
          // refreshing={this.state.refreshing}
          onRefresh={() => {
            // this.setState({ refreshing: true })
            // setTimeout(() => {
            //   this.setState({ refreshing: false });
            // }, 1000)
            fetchWeatherByCity(city.city_code, dispatch)
          }}
        >
          <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                thumb={cityImg}
                title={
                  <Link
                    to='/city'
                    className='link'
                  >
                    {weather.data.cityInfo.city}
                    &nbsp;<img src={choiceImg} />
                  </Link>}
                extra={<span>今天</span>}
              />
              <Card.Body>
                <div>
                  <p>空气质量：{weather.data.data.quality}</p>
                  <p>天气：{weather.data.data.forecast[0].type}</p>
                  <p>温度：{weather.data.data.wendu}℃</p>
                  <p>高温：{weather.data.data.forecast[0].high.slice(3)}</p>
                  <p>低温：{weather.data.data.forecast[0].low.slice(3)}</p>
                  <p>湿度：{weather.data.data.shidu}</p>
                  <p>PM2.5：{weather.data.data.pm25}</p>
                  <p>PM10：{weather.data.data.pm10}</p>
                  <p>风力：{weather.data.data.forecast[0].fl}</p>
                  <p>风向：{weather.data.data.forecast[0].fx}</p>
                  <p>日出：{weather.data.data.forecast[0].sunrise}</p>
                  <p>日落：{weather.data.data.forecast[0].sunset}</p>
                  <p></p>
                </div>
              </Card.Body>
              <Card.Footer content='更新时间' extra={<div>{weather.data.cityInfo.updateTime}</div>} />
            </Card>
            <WhiteSpace size="lg" />
            {weather.data.data.forecast.slice(1).map((day, index) =>
              <div key={index}>
                <Card>
                  <Card.Header
                    extra={<span>{`${day.date.slice(0, 3)}  ${day.date.slice(3)}`}</span>}
                  />
                  <Card.Body>
                    <div>
                      <p>天气：{day.type}</p>
                      <p>高温：{day.high.slice(3)}</p>
                      <p>低温：{day.low.slice(3)}</p>
                      <p>日出：{day.sunrise}</p>
                      <p>日落：{day.sunset}</p>
                      <p>风力：{day.fl}</p>
                      <p>风向：{day.fx}</p>
                    </div>
                  </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
              </div>
            )}
          </WingBlank>
        </PullToRefresh>
      </div>
    )
  }
}

export default Weather