import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import City from './components/City'
import configureStore from './configureStore'
import './style/app.css'

class App extends Component {
 
  render() {
    return (
      <Provider store={configureStore}>
        <Router>
          <div className='app'>
            <Route exact path='/' component={Header} />
            <Route path='/city' component={City} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
