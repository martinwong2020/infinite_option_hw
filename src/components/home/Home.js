import React from 'react'
import "./style.css"
import logo from "../../images/bizbuz.design.png"
import find from "../../images/find&register.png"
import rsvp from "../../images/rsvp.png"
import attend from "../../images/attend.png"
import create from "../../images/create.png"
import footer from "../../images/Mask group.png"
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header'
import Footer from '../footer/Footer'
function Home() {
  const navigate=useNavigate();
  const change_nav =(e, path)=>{
      e.preventDefault();
      navigate(`${path}`);
  }
  return (
    <div className="home_container">
        <Header />
        <section className="home_content">
          <div className="content_container">
            <img className="content_container_button find" src={find} onClick={(e)=>change_nav(e, "/login")}/>
            <img className="content_container_button rsvp" src={rsvp} onClick={(e)=>change_nav(e, "/login")}/>
            <img className="content_container_button attend" src={attend} onClick={(e)=>change_nav(e, "/login")}/>
            <img className="content_container_button create" src={create} onClick={(e)=>change_nav(e, "/login")}/>
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Home