import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

export default function Nav(props)  {
    return (
      <div>
        <NavLink exact to='/'>Eventures</NavLink>

        {
          props.currentUser
            ?
            <>
              {props.currentUser.username}<button onClick={props.handleLogout}>Log Out</button>
            </>
            :
            <Link to='/user/login'>Login/Register</Link>
        }

        {
          props.currentUser && (
            <nav>
              <NavLink to='/events'>Events</NavLink>
              <NavLink to='/categories'>Categories</NavLink>
            </nav>
          )
        }

      </div>
    )
}
