import React from 'react'
import logo from "../../images/bizbuz.design.png"
import "./style.css";
function Header() {
  return (
    <section className="home_header">
        <div className="img_container">
            <img src={logo} />
        </div>
        
    </section>
  )
}

export default Header