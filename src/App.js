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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route className="App" index element={<Home  />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/event" element={<Event />}/>
        <Route path="/eventtype" element={<EventType />}/>
        <Route path="/eventlocation" element={<EventLocation />}/>
        <Route path="/eventimage" element={<EventImage />}/>
        <Route path="/eventquestion" element={<EventQuestion />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
