import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Main.css'
import { getAllCategories } from '../services/categories'
import { getAllEvents, createEvent, deleteEvent, updateEvent } from '../services/events'
import Login from '../components/user/Login'
import SignUp from '../components/user/SignUp'
import EventList from '../components/events/EventList'
import ShowCategories from '../components/events/ShowCategories'
import CreateEvent from '../components/events/CreateEvent'
import EventInfo from '../components/events/EventInfo'
import EventManage from '../components/events/EventManage'
import Home from './Home'
import Ticket from '../components/events/Ticket'


export default class Main extends Component {

  state = {
    categories: [],
    events: [],
    filteredCat: ""
  }

  handleFilteredCat = (e) => {
    const { value } = e.target;
    this.setState({
      filteredCat: value
    })
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

  putEvent = async (id, eventData) => {
    const updatedEvent = await updateEvent(id, eventData);
    this.setState(prevState => ({
      foods: prevState.events.map(event => event.id === id ? updatedEvent : event)
    }))
  }


  render() {
    return (
      <main>

        <Route
          exact path='/'
          render={(props) => (
            <Home
              {...props}
              events={this.state.events}
              currentUser={this.props.currentUser}
            />
          )} />


        <Route
          exact path='/user/login'
          render={(props) => (
            <Login
              {...props}
              handleLoginSubmit={this.props.handleLoginSubmit} />
          )} />

        <Route
          exact path='/user/register'
          render={(props) => (
            <SignUp
              {...props}
              handleRegisterSubmit={this.props.handleRegisterSubmit}
            />
          )} />

        <Route
          exact path='/categories'
          render={(props) => (
            <ShowCategories
              {...props}
              events={this.state.events}
              currentUser={this.props.currentUser}
              destroyEvent={this.destroyEvent}
              handleFilteredCat={this.handleFilteredCat}
              categories={this.state.categories}
            />
          )} />

        <Route
          path='/categories/:id'
          render={(props) => {
            const categoryId = props.match.params.id
            return <ShowCategories
              {...props}
              categoryId={categoryId}
              categories={this.state.categories}
              events={this.state.events}
              currentUser={this.props.currentUser}
              destroyEvent={this.destroyEvent}
              handleFilteredCat={this.handleFilteredCat}
            />
          }} />

        <Route
          exact path='/events'
          render={(props) => (
            <EventList
              {...props}
              events={this.state.events}
              currentUser={this.props.currentUser}
              destroyEvent={this.destroyEvent}
              handleFilteredCat={this.handleFilteredCat}
            />
          )} />

        <Route
          exact path='/new/event'
          render={(props) => (
            <CreateEvent
              {...props}
              postEvent={this.postEvent}
              categories={this.state.categories}
              
            />
          )} />

        <Route
          exact path='/event/:id'
          render={(props) => {
            const eventId = props.match.params.id;
            return <EventInfo
              eventId={eventId}
              categories={this.state.categories}
              currentUser={this.props.currentUser}
            />
          }} />

        <Route
          exact path='/event/:id/edit'
          render={(props) => {
            const eventId = props.match.params.id;
            const event = this.state.events.find(event => event.id === parseInt(eventId))
            return <EventManage
              {...props}
              event={event}
              putEvent={this.putEvent}
            />
          }} />

        <Route
          exact path='/event/:id/ticket'
          render={(props) => {
            const eventId = props.match.params.id;
            return <Ticket
              eventId={eventId}
              currentUser={this.props.currentUser}

            />

          }} />


      </main>
    )
  }
}
