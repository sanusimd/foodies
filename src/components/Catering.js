import React, { Component } from "react";


class Catering extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    return (
      <section className="catering">
        <div className="container">
          <div className="catering__box">
          <div className="discover-images">
            <img
              src="/img/pizza.jpg"
              className="pizza"
              alt={"pizza"}
            />
          </div>
          <div className="catering-info">
            <h3>For Your Special Day</h3>
            <h2>Exceptional Catering Services</h2>
            <p>
              We love food, lots of different food, just like you. We promise an
              intimate and relaxed dining experience that offers different to
              local and foreign patrons .
            </p>

            <div className="btn">
              <a href="www.table.com" className="btn-red">
                View Menu
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  }
}

export default Catering;
