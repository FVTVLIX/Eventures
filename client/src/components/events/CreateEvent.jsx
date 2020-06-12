import React, { Component } from 'react'

export default class CreateEvent extends Component {

  state = {
    name: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {

    const { name } = this.state;
    const { postEvent, history } = this.props;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          postEvent(this.state);
          history.push('/events');
          this.setState({
            name: ""
          })
        }}>
        
        <h3>Create An Event</h3>
        <label htmlFor="name">Title:</label>
        <input
          id="id"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        
        <button>Submit</button>
        
      </form>
    )
  }
}
