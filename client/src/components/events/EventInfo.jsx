import React, { Component } from 'react'
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
        {
          event && (
            <>
              <h3>{event.title}</h3>
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
            </>
          )
        }
      </div>
    )
  }
}
