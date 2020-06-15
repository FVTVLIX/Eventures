import React from 'react'
import './EventList.css'
import { Link } from 'react-router-dom'

export default function EventList(props) {

  const { events, currentUser, destroyEvent, history, categoryId } = props;

  return (
    <>
      <div className="eventlist_container">
        <h3 className="events_banner">Events</h3>
        {
          events
            .filter((event) => {
              if (categoryId) {
                return event.categories.map(cat => cat.id).includes(parseInt(categoryId))
              } else {
                return true
              }
            })
            .map(event => (
              <React.Fragment key={event.id}>
                <div className="event_container">
                  <Link to={`/event/${event.id}`}>
                    <img
                      alt="event_images"
                      className='event_image'
                      src={event.img_url} />
                    <p className='event_date'>{event.date}</p>
                    <p className='event_title'>{event.title}</p>
                  </Link>
                  {
                    currentUser && currentUser.id === event.user_id && (
                      <>
                        <button className="eventlist_button" onClick={() => history.push(`/event/${event.id}/edit`)}>Edit</button>
                        <button className="eventlist_button" onClick={() => destroyEvent(event.id)}>Delete</button>
                        <Link to='/new/event'>
                          <button className="eventlist_button">Create</button>
                        </Link>
                      </>
                    )
                  }
                </div>
              </React.Fragment>
            ))
        }
      </div>
    </>
  )
}