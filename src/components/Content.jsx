import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Words from './Words.jsx'
import Weather from './Weather.jsx'
import City from './City.jsx'
import '../style/content.css'

class Content extends Component {
  render() {
    return (
      <div className='container'>
        <Route exact path='/' component={Words}/>
        <Route path='/weather' component={Weather}/>
        <Route path='/setup' component={City}/>
      </div>
    )
  }
}

export default Content