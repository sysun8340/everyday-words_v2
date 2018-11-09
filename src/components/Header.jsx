import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import Words from './Words'
import WeatherContainer from './WeatherContainer'
import '../style/header.css'

class Header extends Component {

  state = {
    isTabChange: false
  }

  render() {
    const tabs = [
      { title: '天气', sub: '1' },
      { title: '每日一句', sub: '2' }
    ]

    return (
      <div className='header'>
        <Tabs
          tabs={tabs}
          initialPage={'1'}
          onChange={() => {
            console.log('改变')
            this.setState({
              isTabChange: true
            })
            setTimeout(() => {
              this.setState({
                isTabChange: false
              })
            }, 0)
          }}
        >
          <WeatherContainer isTabChange={this.state.isTabChange}/>
          <Words />
        </Tabs>
      </div>
    )
  }
}

export default Header