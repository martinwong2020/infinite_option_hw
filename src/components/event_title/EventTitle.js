import React, { useEffect, useState } from 'react'
import "./style.css";
import CreateEventHeader from '../create-event-header/CreateEventHeader';
import ContinueButton from '../continue_button/ContinueButton';
import question from "../../images/QuestionIcon.png"
function EventTitle({handleTitle, handleType}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [publicchoice,setPublicchoice] = useState(false);
    const [privatechoice,setPrivatechoice] = useState(false);
    const handlePublic=()=>{
        setPublicchoice(!publicchoice);
        if (!publicchoice) {
            setPrivatechoice(false);
        }
    };
    const handlePrivate=()=>{
        setPrivatechoice(!privatechoice);
        if (!privatechoice) {
            setPublicchoice(false);
        }
    };
    useEffect(()=>{
        handleTitle(title);
    },[title])
    useEffect(()=>{
        if(publicchoice){
            handleType("Public");
        }
        if(privatechoice){
            handleType("Private");
        }
    },[publicchoice,privatechoice]);
    return (
        <div className="event_title_container">
            <CreateEventHeader destination={"/eventlocation"}/>
            <section className="event_name_container container">
                <h2>Event Title</h2>
                <input placeholder="Write Event's title here..."className="name_input" type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
            </section>
            <section className="event_description_container container">
                <h2>Event Description</h2>
                <textarea placeholder="Describe your event here..." className="description_input" type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
            </section>
            <section className="event_accessibility_container container">
                <h2>Accessibility <img src={question} alt="question"/></h2>
                <div className="button_container">
                    <div className="public_button" onClick={(e)=>{handlePublic();}}
                        style={{ 
                            border:publicchoice?'3px black solid' :'none'
                        }} 
                    >
                        <div className="color_dot" style={{backgroundColor:'#AA0E00'}}></div>
                        <h5>Public</h5>
                    </div>
                    <div  className="private_button" onClick={(e)=>{handlePrivate();}}
                        style={{ 
                            border:privatechoice?'3px black solid' :'none'
                        }}
                    >
                        <div className="color_dot" style={{backgroundColor:'#12B76A'}}></div>
                        <h5>Private</h5>
                    </div>
                </div>
            </section>
            <div className="continue_button_container">
                <ContinueButton location={"/eventimage"}/>
            </div>
        </div>
    )
}

export default EventTitle