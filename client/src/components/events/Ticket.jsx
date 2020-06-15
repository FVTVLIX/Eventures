import React from 'react'
import './Ticket.css'

export default function Ticket(props) {
  return (
    <div className="ticket_container">
      <h1 className="ticket_banner">Here's Your Ticket!</h1>
      <img
        alt="ticket_image"
        className="qr_code"
        src="https://i.imgur.com/VQ3PbKs.png" />
    </div>
  )
}
