import React, { Component } from "react";
import TopBox from "../TopBox";
import HeadingStyle from "../HeadingStyle";
import Map from "../Map";
import Footer from "../Footer"

class Contact extends Component {
  render() {
    return (
      <div className="contactPage">
        <TopBox title="Contact" />
        <HeadingStyle maintitle="Find Us" subtitle="Contact Details" />
        <Map />
        <div className="contact-box">
            <HeadingStyle
            maintitle="Message us" 
            subtitle="Leave a Message" 
            />
            
        </div>
        <Footer />


         
        
      </div>
    );
  }
}

export default Contact;
