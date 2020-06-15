import React from 'react'
import './Home.css'

export default function Home(props) {

  const { events } = props;

  return (
    <div>
      {
        props.currentUser
          ?
          <>
            {
            }
          </>
          :
          <>
            <h2 className="home_banner">Upcoming Events</h2>
            {
              events.map((event) => (
                <div className="home_container">
                  <img
                    className="home_image"
                    src={event.img_url} />
                  <p
                    key={event.id}
                    className="home_date">{event.date}</p>
                  <p
                    key={event.id}
                    className='home_title'>{event.title}</p>
                  <p
                    key={event.id}
                    className="home_location">{event.location}</p>
                </div>
              ))
            }
          </>
      }
    </div>
  )
}
