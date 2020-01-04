import React, { Component } from "react";

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    return (
      <section className="reservation">
        <div className="info">
          <h3 className="info__title">Book a Table</h3>
          <h2 className="info__heading">Make a Reservation</h2>
          <img
            src="/img/d-line.png"
            className="info__stylish-line"
            alt={"stylish-line"}
          />
        </div>
      </section>
    );
  }
}

export default Reservation;
