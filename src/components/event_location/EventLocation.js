import React, { useEffect, useState } from 'react'
import "./style.css"
import map from "../../images/map.png"
import CreateEventHeader from '../create-event-header/CreateEventHeader'
import ContinueButton from '../continue_button/ContinueButton';
function EventLocation({handleLocation}) {
  const [location,setLocation]=useState("");
  useEffect(()=>{
    handleLocation(location);
  },[location]);
  return (
    <div className="event_location_container">
      <CreateEventHeader destination={"/eventtype"} />
      <div className="event_location_content">
        <h2>Event Location</h2>
        <input className="location_search" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
        <img src={map} className="map_img"/>
        <ContinueButton location={"/eventtitle"}/>
      </div>
    </div>
  )
}

export default EventLocation