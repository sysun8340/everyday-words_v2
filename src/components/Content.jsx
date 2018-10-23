import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Words from './Words'
import Weather from './Weather'
import City from './City'
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