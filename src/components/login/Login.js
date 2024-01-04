import React from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer"

import email from "../../images/email.png";
import google from "../../images/google.png";
import { useNavigate } from 'react-router-dom';

import "./style.css"
function Login() {
  const navigate=useNavigate();
  return (
    <div className="login_container">
        <Header />
        <section className="login_content_container">
          <div className="login_header">
            <h1>
              Login Here
            </h1>
          </div>
          <div className="login_button_container">
            <button className="google_button sign_in_button" onClick={(e)=>{
              e.preventDefault();
              console.log("here;");
              navigate("/signin");
            }}><img className="sign_in_img" src={google} />Sign in with Google</button>
            <h3 className="or_text"> OR</h3>
            <button className="email_button sign_in_button" onClick={(e)=>{
              e.preventDefault();
              console.log("here;");
              navigate("/signin");
            }}><img className="sign_in_img" src={email}/>Register with email</button>
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Login