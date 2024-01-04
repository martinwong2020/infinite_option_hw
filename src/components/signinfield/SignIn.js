import React, { useState } from 'react';
import Header from '../header/Header';
import "./style.css";

import { useNavigate } from 'react-router-dom';
function SignIn() {
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div className="sign_in_container">
            <Header />
            <section className="sign_in_content_container">
                <form>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder='Enter your username' onChange={(e)=>{setUsername(e.target.value)}} />
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder='*********************' onChange={(e)=>{setPassword(e.target.value)}} />
                    
                    <input type="submit" value="Submit" onClick={(e)=>{
                        navigate("/create");
                    }}/>
                </form>
            </section>
        </div>
    )
}

export default SignIn