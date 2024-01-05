import React from 'react'
import Header from '../header/Header'
import "./style.css";

import back_arrow from "../../images/Vector 10.png";
import { useNavigate } from 'react-router-dom';

function CreateEventHeader({destination}) {
    
    const navigate=useNavigate();
    const go_back=(destination)=>{
        navigate(destination);
    };
    return (
        <div className="create_event_header_container">
            <div className="event_header_top">
                <Header />
                <img src={back_arrow} alt="back" onClick={(e)=>{e.preventDefault(); go_back(destination);}}/>
            </div>
            <h1>Create New Event</h1>
        </div>
    )
}

export default CreateEventHeader