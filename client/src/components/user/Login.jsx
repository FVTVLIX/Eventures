import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'



export default class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {

    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLoginSubmit(this.state);
        history.push('/events');
        this.setState({
          username: "",
          password: ""
        })
      }}>

        <h3 className="login_banner">Login</h3>
        <label
          className="login_username"
          htmlFor="username">username:
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>

        <br />

        <label
          className="login_password"
          htmlFor="password">password:
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <br />

        <Link
          className="register_link"
          to='/user/register'>Not A User? Register Here!</Link>
        
        <br />

        <button className="login_submit">Submit</button>
        
      </form>
    )
  }
}
