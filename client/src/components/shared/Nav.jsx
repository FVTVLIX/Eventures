import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

export default function Nav(props)  {
    return (
      <div>
        <NavLink
          className="nav_title"
          exact to='/'>Eventures</NavLink>

        {
          props.currentUser
            ?
            <>
              <p className="username">Welcome, {props.currentUser.username}!</p>
              <button className="logout_button" onClick={props.handleLogout}>Log Out</button>
            </>
            :
            <Link className="login_link" to='/user/login'>Login/Register</Link>
        }

        {
          props.currentUser && (
            <nav>
              <NavLink className="events_link" to='/events'>Events</NavLink>
              <NavLink className="categories_link" to='/categories'>Categories</NavLink>
            </nav>
          )
        }

      </div>
    )
}
