import './App.css';
import Home from './components/home/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import SignIn from './components/signinfield/SignIn';
import Create from './components/create/Create';
import Event from './components/event/Event';
import EventType from './components/event-type/EventType';
import EventLocation from './components/event_location/EventLocation';
import EventQuestion from './components/event_question/EventQuestion';
import EventImage from './components/event_img/EventImage';
import EventTitle from './components/event_title/EventTitle';
import EventReview from './components/event_review/EventReview';
import { useEffect, useState } from 'react';

function App() {
  const [eventDate,setEventDate]=useState("");
  const [eventTitle,setEventTitle]=useState("");
  const [eventStartTime,setEventStartTime]=useState("");
  const [eventEndTime,setEventEndTime]=useState("");
  const [eventLocation,setEventLocation]=useState("");
  const [eventQuestion,setEventQuestion]=useState([]);
  const [eventType,setEventType]=useState("");
  const [eventIndustry,setEventIndustry]=useState("");
  const [eventCapacity,setEventCapacity]=useState("");
  const handleStartTime=(time)=>{
    setEventStartTime(time);
  }
  const handleEndTime=(time)=>{
    setEventEndTime(time);
  }
  const handleDate=(date)=>{
    setEventDate(date);
  }
  const handleLocation=(location)=>{
    setEventLocation(location);
  }
  const handleTitle=(title)=>{
    setEventTitle(title);
  }
  const handleQuestion=(question)=>{
    setEventQuestion(question);
  }
  const handleType=(type)=>{
    setEventType(type);
  }
  const handleIndustry=(type)=>{
    setEventIndustry(type);
  }
  const handleCapacity=(capacity)=>{
    setEventCapacity(capacity);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route className="App" index element={<Home  />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/event" element={<Event />}/>
        <Route path="/eventtype" element={
        <EventType 
          handleStartTime={handleStartTime}
          handleEndTime={handleEndTime}
          handleDate={handleDate}
          handleIndustry={handleIndustry}
          handleCapacity={handleCapacity}
        />}/>
        <Route path="/eventlocation" element={
        <EventLocation 
          handleLocation={handleLocation}
        />}/>
        <Route path="/eventtitle" element={
        <EventTitle 
          handleTitle={handleTitle}
          handleType={handleType}
        />}/>
        <Route path="/eventimage" element={<EventImage />}/>
        <Route path="/eventquestion" element={
        <EventQuestion
          handleQuestion={handleQuestion}      
        />}/>
        <Route path="/eventreview" element={
          <EventReview 
            eventEndTime={eventEndTime}
            eventStartTime={eventStartTime}
            eventDate={eventDate}
            eventLocation={eventLocation}
            eventTitle={eventTitle}
            eventQuestion={eventQuestion}
            eventType={eventType}
            eventIndustry={eventIndustry}
            eventCapacity={eventCapacity}
        />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
