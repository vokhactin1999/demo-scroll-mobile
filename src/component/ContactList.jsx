import React from 'react';
import './ContactList.css'
function ContactList(props) {
    return (
<>
  <div className="contact-message">
    <img src="messages-3.svg" alt="" />
  </div>
  <div className="contact-social-list">
    <a target="_blank" href="https://m.me/111087687927395">
      <img
        className="image-icon"
        src="messenger.png"
        alt=""
      />
    </a>
    <a target="_blank" href="https://wa.me/84984802030">
      <img className="image-icon" src="phone.png" alt="" />
    </a>
    <a target="_blank" href="https://t.me/+84984802030">
      <img
        className="image-icon"
        src="telegram.png"
        alt=""
      />
    </a>
    <a target="_blank" href="https://zalo.me/0938346221">
      <img className="image-icon" src="zalo.png" alt="" />
    </a>
    <div className="close-contact">
      <img
        className="close-contact-img"
        src="x.png"
        alt=""
      />
    </div>
  </div>
</>
    );
}

export default ContactList;