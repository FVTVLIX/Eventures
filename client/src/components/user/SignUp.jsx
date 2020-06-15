import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'


export default class SignUp extends Component {

  state = {
    username: "",
    email: "",
    password: ""
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {

    const { username, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegisterSubmit(this.state);
        history.push('/events');
        this.setState({
          username: "",
          email: "",
          password: ""
        })
      }}>

        <h3 className="register_banner">Register</h3>
        <label
          className="register_username"
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
          className="register_email"
          htmlFor="email">email: 
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <br />

        <label
          className="register_password"
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
          to='/user/login'>Already A User? Login Here!</Link>
        
        <br />

        <button className="register_submit">Submit</button>
        
      </form>
    )
  }
}
