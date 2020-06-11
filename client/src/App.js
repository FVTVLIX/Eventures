import React, { Component } from 'react'
import './App.css'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import Nav from './components/shared/Nav'




export default class App extends Component {

  state = {
    currentUser: null
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  }

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear();
    removeToken();
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }




  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}

