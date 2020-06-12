import React, { Component } from 'react'
import './EventManage.css'

export default class EventManage extends Component {

  state = {
    title: "",
    hosted_by: "",
    date: "",
    location: "",
    price: "",
    img_url: ""
  }


  componentDidMount() {
    if (this.props.event) {
      this.setEventForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.event !== this.props.event) {
      this.setEventForm();
    }
  }

  setEventForm = () => {
    const { name } = this.props.event;
    this.setState({ name })
  } 

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }


  render() {

    const { title, hosted_by, date, location, price, img_url } = this.state;
    const { putEvent, history, event } = this.props;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          postEvent(this.state);
          history.push('/events');
          this.setState({
            title: "",
            hosted_by: "",
            date: "",
            location: "",
            price: "",
            img_url: ""
          })
        }}>
        
        <h3>Manage Event</h3>

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={this.handleChange}
        />

        <label htmlFor="hosted_by">Hosted By:</label>
        <input
          id="hosted_by"
          name="hosted_by"
          type="text"
          value={hosted_by}
          onChange={this.handleChange}
        />
        
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="text"
          value={date}
          onChange={this.handleChange}
        />

        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={this.handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          type="text"
          value={price}
          onChange={this.handleChange}
        />

        <label htmlFor="img_url">Image URL:</label>
        <input
          id="img_url"
          name="img_url"
          type="text"
          value={img_url}
          onChange={this.handleChange}
        />


        <button>Submit</button>
        
      </form>
    )
  }
}
