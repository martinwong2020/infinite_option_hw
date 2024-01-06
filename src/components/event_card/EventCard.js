import React from 'react'
import "./style.css"
import card_img from "../../images/19873 21.png";
import card_alarm from "../../images/alarm-clock.png"
import card_location from "../../images/icon.png"
function EventCard({date,title,startTime,endTime,location}) {
  return (
    <div className="event_card_container">
        <div className="event_display">
            <div className="card_container">
              <div className="card_date_container">
                {date}
              </div>
              <div className="card_name_container">
                {title}
              </div>
              <div className="card_content_container">
                <div className="card_img_container">
                  <img src={card_img} alt="event_img"/>
                </div>
                <div className="card_info_container">
                  <div className="card_time">
                    <img src={card_alarm} alt="card_alarm" />
                    <p className="card_info_text">
                      {startTime} - {endTime}
                    </p>
                    
                  </div>
                  <div className="card_location">
                    <img src={card_location} alt="card_location" />
                    <p className="card_info_text">
                      {location}
                    </p>
                  </div>
                  <button className="card_register">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

    </div>
  )
}

export default EventCard