import React from 'react'
import "./style.css"
import Header from '../header/Header'

import { useNavigate } from 'react-router-dom'
function Create() {
    const navigate=useNavigate();
    return (
        <div className="create_container">
            <Header />
            <section className="create_form_container"> 
                <form >
                    <h2>Create Account</h2>
                    <label for="password">Confirm Password</label>
                    <input id="password" type="password" placeholder="*********************"/>
                    <input type="submit" value="Create Account" className="submit_button" onClick={(e)=>{
                        e.preventDefault();
                        navigate("/event")
                    }}/>
                    <div className="footer_label">
                        <h4>If you already have an account, <span className="login_link" onClick={(e)=>{
                            e.preventDefault();
                            navigate("/login");
                        }}>login here</span>.</h4>
                    </div>
                    
                </form>
            </section>
        </div>
    )
}

export default Create