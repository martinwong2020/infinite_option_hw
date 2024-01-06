import React from 'react'
import "./style.css";
import CreateEventHeader from '../create-event-header/CreateEventHeader';

import EventCard from '../event_card/EventCard';

import map from "../../images/map.png"
function EventReview({
  eventStartTime,
  eventEndTime, 
  eventDate, 
  eventLocation,
  eventTitle, 
  eventQuestion,
  eventType,
  eventIndustry,
  eventCapacity
}) {
  return (
    <div className="event_review_container">
        <CreateEventHeader destination={"/eventquestion"}/>
        <div className="event_review_content_container">
          <h2>Event Review</h2>

          <section className="card_display_container">
            <EventCard 
              date={eventDate} 
              title={eventTitle} 
              startTime={eventStartTime} 
              endTime={eventEndTime} 
              location={eventLocation}
            />
          </section>
          <section className="event_details">
            <div className="row">
              <p className="bold">
                Event Type
              </p>
              <p className="response">
                {eventIndustry}
              </p>
            </div>
            <div className="row">
              <p className="bold">
                Accessibility
              </p>
              <p className="response">
                {eventType}
              </p>
            </div>
            <div className="row">
              <p className="bold">
                Event Capacity
              </p>
              <p className="response">
                {eventCapacity}
              </p>
            </div>
          </section>
          <section className="pre-event_question">
            <p><strong>Pre-Event Questionaire</strong></p>
            {/* <p>What is your current role?</p>
            <p>What is your current role?</p>
            <p>What is your current role?</p> */}
            {eventQuestion.map((question,index)=>(
              <p value={index}>{question}</p>
            ))}
          </section>
          <section className="event_location_container">
            <div className="event_location location_container">
              <strong>{eventLocation}</strong>
            </div>
            <div className="event_location_img_container location_container">
              <img src={map} alt="map"/>
            </div>
          </section>
          <div className="create_button_container">
            <button className="create_button">Create Event</button>
          </div>
        </div>
    </div>
  )
}

export default EventReview