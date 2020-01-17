import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <section className="contact-form">
        <div className="container">
          <form className="form">
            <div className="details">
              <div className="name">
                <input 
                type="text" 
                placeholder="Name" 
                />
              </div>
              <div className="phone">
                <input 
                type="text" 
                placeholder="Phone"
                 />
              </div>
            </div>
            <div className="details">
              <div className="email">
                <input
                 type="email" 
                 placeholder="Email" 
                 />
              </div>
              <div className="subject">
                <input 
                type="text" 
                placeholder="Subject" 
                />
              </div>
            </div>
            <div className="message-box">
              <textarea
                name="content"
                className="box"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="btn-box">
              <a href="s.com">Get The Food</a>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
