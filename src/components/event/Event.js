import React from 'react'
import Header from '../header/Header'
import "./style.css";

import card_img from "../../images/19873 21.png";
import card_alarm from "../../images/alarm-clock.png"
import card_location from "../../images/icon.png"
import { useNavigate } from 'react-router-dom';
function Event() {
  const navigate=useNavigate();
  return (
    <div className="event_container">
        <Header />
        <section className="event_content_container">
          <div className="create_event_container">
              <h1>Create New Event</h1>
              <button className="create_button red_button" onClick={(e)=>{e.preventDefault(); navigate("/eventtype")}}>Create</button>
          </div>
          <div className="event_display">
            <h1>Edit Event</h1>
            <div className="card_container">
              <div className="card_date_container">
                June 22
              </div>
              <div className="card_name_container">
                Career Fair for The Exceptional
              </div>
              <div className="card_content_container">
                <div className="card_img_container">
                  <img src={card_img} alt="event_img"/>
                </div>
                <div className="card_info_container">
                  <div className="card_time">
                    <img src={card_alarm} alt="card_alarm" />
                    <p className="card_info_text">
                      2:30PM - 3:30PM
                    </p>
                    
                  </div>
                  <div className="card_location">
                    <img src={card_location} alt="card_location" />
                    <p className="card_info_text">
                      San Jose, CA
                    </p>
                  </div>
                  <button className="card_register">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Event