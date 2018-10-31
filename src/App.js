import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import './style/app.css'

class App extends Component {
  componentWillMount () {

 
  }
  render() {
    return (
      <Provider store={configureStore}>
        <Router>
          <div className='app'>
            <Header />
            <Content />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
