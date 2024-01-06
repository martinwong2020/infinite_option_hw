import React, { useState } from 'react'
import "./style.css";
import CreateEventHeader from '../create-event-header/CreateEventHeader';

import defaultImg from "../../images/19873 21.png";
import camera from "../../images/CameraIcon.png";
import ContinueButton from '../continue_button/ContinueButton';
function EventImage() {
    const [imagePreview, setImagePreview] = useState('');
    const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };
  return (
    <div className="event_image_container">
        <CreateEventHeader destination={"/eventtitle"}/>
        <h2>Event Photo</h2>
        <section className="default_img_container">
            <h3>Use Default image</h3>
            <img src={defaultImg} alt="default"/>
        </section>
        <div className="line_with_break">
            <div className="line"></div>
            <div className="break_word">or</div>
            <div className="line"></div>
        </div>
        <section className="own_img_container">
          <h3>Choose your own image</h3>
          <div className="img_selection_container">
            <div className="upload_container">
              <div className="file-input-container">
                <label className="file-input-label" for="customFileInput">Choose Image</label>
                <input className="file-input" id="customFileInput" type="file" onChange={handleImage} accept="image/*" placeholder='Choose Image'/>
              </div>
              <div className="file-input-container">
                <label className="file-input-label" for="customFileInput"><img src={camera} alt="camera"/>Take a new one</label>
                <input className="file-input" id="customFileInput" type="file" onChange={handleImage} accept="image/*" placeholder='Choose Image'/>
              </div>
            </div>
            <div className="image_display">
              {imagePreview && <img src={imagePreview} alt="Image Preview" style={{ height:'100px', width: '100px', marginTop:'1.5px' }} />}
            </div>
          </div>
          
            
        </section>
        <div className="continue_button_container">
          <ContinueButton location={"/eventquestion"}/>
        </div>
        
    </div>
  )
}

export default EventImage