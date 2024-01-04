import './App.css';
import Home from './components/home/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import SignIn from './components/signinfield/SignIn';
import Create from './components/create/Create';
import Event from './components/event/Event';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route className="App" index element={<Home  />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/event" element={<Event />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
