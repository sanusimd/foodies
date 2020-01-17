import React, { Component } from "react";

class ReserveTable extends Component {
  render() {
    return (
      <div className="reserveTable">
        <div className="container">
          <div className="reserve-info">
            <div className="form-box ">
              <form className="form">
                <div className="details">
                  <div className="name">
                    <input 
                    type="text" 
                    placeholder="Name" 
                    required="required" 
                    />
                  </div>
                  <div className="email">
                    <input
                      type="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                </div>
                <div className="details">
                  <div className="phone">
                    <input
                      type="text"
                      placeholder="Phone"
                      required="required"
                    />
                  </div>
                  <div className="date">
                    <input 
                    type="date" 
                    placeholder="Date" 
                    required="required" 
                    />
                  </div>
                </div>
                <div className="details">
                  <div className="time">
                    <input 
                    type="time"
                     placeholder="Time" 
                     required="required" 
                     />
                  </div>
                  <div className="person">
                    <input
                      type="text"
                      placeholder="Person"
                      required="required"
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
              </form>
              <div className="btn-box">
                <a href="s.com" className="btn-reservation">Make A Reservation</a>
              </div>
            </div>
            <div className="image-box">
              <img src={require("../img/chef.png")} alt={"Chef"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReserveTable;
