import React, { Component } from 'react'
import './App.css'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import Nav from './components/shared/Nav'
import Main from './components/Main'
import Footer from './components/shared/Footer'




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

  componentDidMount() {
    this.handleVerify();
  }




  render() {
    return (
      <div>
        <Nav
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />

        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleRegisterSubmit={this.handleRegisterSubmit}
          currentUser={this.state.currentUser}
        />

        <Footer />
        
      </div>
    )
  }
}

