import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/header.css'

class Header extends Component {
  render() {
    
    return (
      <header className='header'>
        <NavLink exact to='/' className='nav words' activeStyle={{color: 'black', backgroundColor: 'gray'}}>
          <p className='text'>每日一句</p>
        </NavLink>
        <NavLink to='/weather' className='nav weather' activeStyle={{color: 'black', backgroundColor: 'gray'}}>
          <p className='text'>天气</p>
        </NavLink>
        <NavLink to='/setup' className='nav setup' activeStyle={{color: 'black', backgroundColor: 'gray'}}>
          <p className='text'>城市</p>
        </NavLink>
      </header>
    )
  }
}

export default Header