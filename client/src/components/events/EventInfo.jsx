import React, { Component } from 'react'
import './EventInfo.css'
import { Link } from 'react-router-dom'
import { getOneEvent, eventToCategory } from '../../services/events'



export default class EventInfo extends Component {

  state = {
    event: null,
    categoryId: ""
  }


  componentDidMount() {
    this.setEvent()
  }

  setEvent = async () => {
    const event = await getOneEvent(this.props.eventId);
    this.setState({ event })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      categoryId: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const event = await eventToCategory(this.state.categoryId, this.state.event.id);
    this.setState({ event });
  }


  render() {

    const { event } = this.state;
    const { categories, currentUser } = this.props;

    return (
      <div>
        <h1 className="info_banner">Event Info</h1>
        {
          event && (
            <>
              <img
                className="info_image"
                src={event.img_url} />
              <h3 className="info_title">{event.title}</h3>
              <p className="info_host">Hosted By: {event.hosted_by}</p>
              <p className="info_date">Date: {event.date}</p>
              <p className="info_location">Location: {event.location}</p>
              <p className="info_price">Price: {event.price}</p>
              {event.categories.map(category => (
                <p key={category.id}>{category.name}</p>
              ))}
              {
                currentUser && currentUser.id === event.user_id && (
                  <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                      <option>Select A Category</option>
                      {categories.map(category => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </form>
                )
              }
              <Link to={`/event/${event.id}/ticket`}>
                <button className="rsvp">RSVP</button>
              </Link>
            </>
          )
        }
      </div>
    )
  }
}
