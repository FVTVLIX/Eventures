import React, { Component } from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink exact to='/'>Eventures</NavLink>
      </div>
    )
  }
}
