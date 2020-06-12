import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getAllCategories } from '../services/categories'
import { getAllEvents, createEvent, deleteEvent } from '../services/events'
import Login from '../components/user/Login'
import SignUp from '../components/user/SignUp'
import EventList from '../components/events/EventList'
import ShowCategories from '../components/events/ShowCategories'
import CreateEvent from '../components/events/CreateEvent'


export default class Main extends Component {

  state = {
    categories: [],
    events: []
  }


  componentDidMount() {
    this.getCategories();
    this.getEvents();
  }


// ------- Categories ----------
  
  getCategories = async () => {
    const categories = await getAllCategories()
    this.setState({ categories })
  }

// ---------- Events -----------

  getEvents = async () => {
    const events = await getAllEvents();
    this.setState({ events });
  }

  postEvent = async (eventData) => {
    const newEvent = await createEvent(eventData);
    this.setState(prevState => ({
      events: [...prevState.events, newEvent]
    }));
  }

  destroyEvent = async (id) => {
    await deleteEvent(id);
    this.setState(prevState => ({
      events: prevState.events.filter(event => event.id !== id)
    }));
  }


  render() {
    return (
      <div>

        <Route path='/user/login' render={(props) => (
          <Login
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit} />
        )} />

        <Route path='/user/register' render={(props) => (
          <SignUp
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />

        <Route path='/categories' render={() => (
          <ShowCategories
            categories={this.state.categories}
          />
        )} />

        <Route path='/events' render={() => (
          <EventList
            events={this.state.events}
            currentUser={this.props.currentUser}
            destroyEvent={this.destroyEvent}
          />
        )} />

        <Route path='/new/event' render={(props) => (
          <CreateEvent
            {...props}
            postEvent={this.postEvent}
          />
        )} />
        
      </div>
    )
  }
}
