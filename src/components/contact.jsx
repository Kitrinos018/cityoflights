/*
export default function Contact() {
    return (
      <div id="contact">
        <h1>Contact US</h1>
      </div>
    );
  }
  */

import React from 'react';
import '../css/contact.css';

export default function Contact() {
  return (
    <div id="contact">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please don't hesitate to contact us. We're here to help!</p>

        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>Email: iseage@amusementpark.com</p>
          <p>Phone: +1 (561) 935-1617 </p>
          <p>Address: Ames, IA 50011</p>
        </div>

        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <label>Name:</label>
            <input type="text" />

            <label>Email:</label>
            <input type="email" />

            <label>Message:</label>
            <textarea rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
