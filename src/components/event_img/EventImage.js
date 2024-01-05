import React from 'react'
import "./style.css";
import CreateEventHeader from '../create-event-header/CreateEventHeader';

import defaultImg from "../../images/19873 21.png"
function EventImage() {
  return (
    <div className="event_image_container">
        <CreateEventHeader destination={"/eventlocation"}/>
        <h2>Event Photo</h2>
        <section className="default_img_container">
            <h3>Use Default image</h3>
            <img src={defaultImg} alt="default"/>
        </section>
        <div className="line_with_break">
            <div className="line"></div>
            <div className="break_word">or</div>
            <div className="line"></div>
        </div>
        <section className="own_img_container">
            <h3>Choose your own image</h3>
        </section>
    </div>
  )
}

export default EventImage