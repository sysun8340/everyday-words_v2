import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { List, SearchBar } from 'antd-mobile'
import { setCity } from '../actions'
import cityData from '../city.json'
import { getFilteredCity } from '../utils'
import '../style/city.css'

const stickyStyle = {
  position: 'sticky',
  top: '78px',
  zIndex: 2
}

class City extends Component {

  state = {
    cities: cityData
  }

  searchValue = React.createRef()

  onCityChange = cityCode => dispatch => {
    const city = this.getCityByCityCode(cityCode)
    dispatch(setCity(city))
  }

  render() {
    const { city, dispatch } = this.props
    
    return (
      <div className='city'>
        <header className='cityHeader'>
          <div style={{ marginRight: 'auto'}}>
            <Link to='/' style={{color: '#108ee9'}}>返回</Link>
          </div>
          <div>当前城市：<span style={{color: '#108ee9'}}>{city.city_name}</span></div> 
        </header>
        <div className='citySearchBar'>
          <SearchBar
            placeholder='搜索城市/pinyin'
            ref={this.searchValue}
            onChange={(value) => {
              // 当清空搜索框时，显示所有城市
              if(value.length === 0) {
                this.setState({
                  cities: {...cityData}
                })
                return
              }
              // 根据输入值过滤城市
              const newCityData = getFilteredCity(value, cityData)
              if(newCityData === undefined) return
              // 如果过滤后的城市存在，则推送到state
              if(Object.keys(newCityData).length > 0) {
                this.setState({
                  cities: {...newCityData}
                })
              }
            }}
          />
        </div>
        <div>
          {
            Object.keys(this.state.cities).map((item, index) => 
              <div key={index}>
                {
                  <div className='cityList'>
                    <div style={stickyStyle}>
                      <List>
                        <List.Item style={{backgroundColor: '#99CCFF'}}>
                          {item}
                        </List.Item>
                      </List>
                    </div>
                    {
                      this.state.cities[item].map(city => 
                        <div key={city.city_code}>
                          <List>
                            <Link to='/' className='link'>
                              <List.Item
                                onClick={() => {
                                  dispatch(setCity(city))
                                  this.setState({
                                    cities: cityData
                                  })
                                  this.searchValue.current.state.value = '' // 选中城市后自动清空搜索框
                                  localStorage.setItem('city', JSON.stringify(city))
                                }}
                              >
                                {city.city_name}
                              </List.Item>
                            </Link>
                          </List>
                        </div>
                      )
                    }
                  </div>
                }
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  city: state.city
})
export default connect(mapState)(City)