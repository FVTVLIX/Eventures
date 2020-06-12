import React from 'react'
import { Link } from 'react-router-dom'

export default function EventList(props) {

  const { events, currentUser, destroyEvent, history } = props;

  return (
    <>
      <h3>Events</h3>
      {
        events.map(event => (
          <React.Fragment key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
            {
              currentUser && currentUser.id === event.user_id && (
                <>
                  <button onClick={() => history.push(`/event/${event.id}/edit`)}>Edit</button>
                  <button onClick={() => destroyEvent(event.id)}>Delete</button>
                </>
              )
            }
          </React.Fragment>
        ))
      }
      <Link to='/new/event'>
        <button>Create</button>
      </Link>
    </>
  )
}