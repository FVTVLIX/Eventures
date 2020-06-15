import React, { Component } from 'react'
import './CreateEvent.css'

export default class CreateEvent extends Component {

  state = {
    title: "",
    hosted_by: "",
    date: "",
    location: "",
    price: "",
    img_url: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {

    const { title, hosted_by, date, location, price, img_url } = this.state;
    // console.log(this.state)
    const { postEvent, history } = this.props;

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

        <h3 className="create_banner">Create An Event</h3>

        <div className="form_container">

        <label
          className="create_title"
          htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={this.handleChange}
        />

        <br />


        <label
          className="create_host"
          htmlFor="hosted_by">Hosted By: </label>
        <input
          id="hosted_by"
          name="hosted_by"
          type="text"
          value={hosted_by}
          onChange={this.handleChange}
        />

        <br />

        <label
          className="create_date"
          htmlFor="date">Date: </label>
        <input
          id="date"
          name="date"
          type="text"
          value={date}
          onChange={this.handleChange}
        />

        <br />

        <label
          className="create_location"
          htmlFor="location">Location: </label>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={this.handleChange}
        />

        <br />

        <label
          className="create_price"
          htmlFor="price">Price: </label>
        <input
          id="price"
          name="price"
          type="text"
          value={price}
          onChange={this.handleChange}
        />

        <br />

        <label
          className="create_image"
          htmlFor="img_url">Image URL: </label>
        <input
          id="img_url"
          name="img_url"
          type="text"
          value={img_url}
          onChange={this.handleChange}
          />
          
          </div>

        <br />


        <button className="create_submit">Submit</button>

      </form>
    )
  }
}
