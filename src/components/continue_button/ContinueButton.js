import React from 'react'
import "./style.css";
import arrow from "../../images/arrow-square-right.png"
import { useNavigate } from 'react-router-dom';
function ContinueButton({location}) {
    const navigate = useNavigate(); 
    return (
        <div className='continue_container' onClick={()=>{navigate(location)}}>
            Continue
            <img src={arrow} alt="arrow"/>
        </div>
    )
}

export default ContinueButton