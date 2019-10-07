import React from 'react';
import './Contact.css';



function Contact({ name, avatarURL, online }) {
    return (
      <div className="Contact">
        <img className="avatar" src={avatarURL} ></img>
        <div>
          <h3 className="name">{name}</h3>
          <div className="status">
            <span className={ online ? "status-online" : "status-offline"}></span>
            <span className="status-text">{ online ? "Online" : "Offline"}</span>
          </div>
         </div>
      </div>
    );
  }

export default Contact;
