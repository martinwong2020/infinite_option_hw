import React from 'react'
import "./style.css";
import footer from "../../images/Mask group.png"
function Footer() {
  return (
    <section className="home_footer">
        <div className="footer_img_container">
            <img src={footer}/>
        </div>
    </section>
  )
}

export default Footer