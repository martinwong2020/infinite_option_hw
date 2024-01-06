import React, { useEffect, useState } from 'react'
import CreateEventHeader from '../create-event-header/CreateEventHeader'
import "./style.css"
import ContinueButton from '../continue_button/ContinueButton';
function EventType({handleStartTime, handleEndTime, handleDate, handleIndustry, handleCapacity}) {
    const back_path="/event"
    const [event_types,setEvent_types]=useState([
        {type:"Business Marketing", bgcolor:"#C2E9D9",dot:"#12B76A",selected:false},
        {type:"Social Mixer", bgcolor:"#F2ABA5",dot:"#F26457",selected:false},
        {type:"Party or Event", bgcolor:"#C1DEEF",dot:"#90CAED",selected:false},
        {type:"Other", bgcolor:"#CE807A",dot:"#AA0E00",selected:false}
    ]);
    const [nolimit, setNolimit] = useState(false);
    const [customlimit, setCustomlimit] = useState(false);
    const [customlimitnumber,setCustomlimitnumber]=useState(0);
    const [eventStartTime,setEventStartTime]=useState("");
    const [eventEndTime,setEventEndTime]=useState("");
    const [eventDate,setEventDate]=useState("");
    const handleNoLimitChange = () => {
        setNolimit(!nolimit);
        if (!nolimit) {
            setCustomlimit(false);
        }
        
      };
    
    const handleCustomLimitChange = () => {
        setCustomlimit(!customlimit);
        if (!customlimit) {
            setNolimit(false);
        }
    };
    useEffect(()=>{
        handleStartTime(eventStartTime);
        console.log(eventStartTime,typeof(eventStartTime));
    },[eventStartTime]);
    useEffect(()=>{
        handleEndTime(eventEndTime);
    },[eventEndTime]);
    useEffect(()=>{
        handleDate(eventDate);
    },[eventDate]);
    useEffect(()=>{
        for(let i=0;i<event_types.length;i++){
            if(event_types[i].selected){
                handleIndustry(event_types[i].type);
                break;
            }
        }
    },[event_types])
    useEffect(()=>{
        if(nolimit){
            handleCapacity("No Limit");
        }
        if(customlimit){
            handleCapacity(customlimitnumber);
        }
    },[nolimit,customlimit,customlimitnumber])
    return (
        <div className="event_type_container">
            <CreateEventHeader destination={back_path} />
            <section className="event_type_content">
                <h3>Event Type</h3>
                <div className="type_container">
                    {event_types.map((type,index)=>(
                        <div key={index}className="type_button" 
                        style={{
                            backgroundColor:type.bgcolor, 
                            border:type.selected?'3px black solid' :'none'
                        }} 
                        onClick={(e)=>{
                            e.preventDefault();
                            const updatedEventTypes = [...event_types];
                            updatedEventTypes[index].selected = !updatedEventTypes[index].selected;
                            setEvent_types(updatedEventTypes);
                        }}>
                            <div className="color-dot" style={{backgroundColor:type.dot}}></div>
                            {type.type}
                        </div>
                    ))}
                </div>
            </section>

            <section className="event_type_time">
                <h2>Event Date & Time</h2>
                <div className="event_time">
                    <div className="event_label">
                        <label for="start_date">Start Date</label>
                        <label for="start_time">Time</label>
                    </div>
                    <div className="event_input">
                        <input type="date" id="start_date" value={eventDate} onChange={(e)=>{setEventDate(e.target.value)}} />
                        <input type="time" id="start_time" value={eventStartTime} onChange={(e)=>{setEventStartTime(e.target.value)}}/>
                    </div>
                    <div className="event_label">
                        <label for="start_date">End Date</label>
                        <label for="start_time">Time</label>
                    </div>
                    <div className="event_input">
                        <input type="date" id="start_date" />
                        <input type="time" id="start_time" value={eventEndTime} onChange={(e)=>{setEventEndTime(e.target.value)}}/>
                    </div>
                    
                </div>
            </section>
            <section className="event_type_capacity">
                <h2>Event Capacity</h2>
                <div className="event_capacity">
                    <input type="checkbox" id="no_limit" onChange={handleNoLimitChange} checked={nolimit}/>
                    <label for="no_limit">No Limit</label>
                    <div className="custom_capacity">
                        <div>
                            <input type="checkbox" id="custom_limit" onChange={handleCustomLimitChange} checked={customlimit}/>
                            <label for="custom_limit">Set Limit</label>
                        </div>                    
                        <input className="custom_number"type="number" min="0" 
                            style={{display:customlimit?'block':'none'}}
                            onChange={(e)=>{setCustomlimitnumber(e.target.value)}}
                        />
                    </div>
                </div>
            </section>
            <div className="continue_component_container">
                <ContinueButton location={"/eventlocation"}/>
            </div>
        </div>
    )
}

export default EventType