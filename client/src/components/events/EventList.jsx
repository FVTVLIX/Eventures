import React from 'react'
import './EventList.css'
import { Link } from 'react-router-dom'

export default function EventList(props) {

  const { events, currentUser, destroyEvent, history } = props;

  return (
    <>
      <div className="event_container">
        <h3 className="events_banner">Events</h3>
        {
          events.map(event => (
            <React.Fragment key={event.id}>
              <Link to={`/events/${event.id}`}>
                <p className='event_title'>{event.title}</p>
                <p className='event_date'>{event.date}</p>
                <img
                  // alt="event_images"
                  className='event_image'
                  src={event.img_url} />
              </Link>
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
      </div>
    </>
  )
}