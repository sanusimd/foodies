import React, { Component } from "react";

class Recommend extends Component {
  

  render() {
    return (
      <section className="recommend">
        <div className="container">
          <div className="recommend__box">
            <div className="recommend-images">
              <div className="salad-image">
                <img
                  src="/img/pizaa-2.jpg"
                  className="pizza-2"
                  alt={"pizza-2"}
                />
              </div>
              <div className="tea-image">
                <img
                  src="/img/pizza-3.jpg"
                  className="pizza-3"
                  alt={"pizza-3"}
                />
              </div>
            </div>
            <div className="recommend-info">
              <h3>Should to try</h3>
              <h2>Chef Recommend</h2>
              <img
                src="/img/d-line.png"
                className="stylish-line"
                alt={"stylish-line"}
              />
              <p>
                We love food, lots of different food, just like you. We promise
                an intimate and relaxed dining experience that offers different
                to local and foreign patrons .
              </p>
              <p>
                Pick up at the restaurant at your convenience, 7 days a week.
                Available for orders of $100 or more, Monday - Friday until
                4P.M. Delivery and Set-Up Fee of $25..
              </p>
              <div className="btn-box">
                <a href="a" className="btn-red">
                  Get the Food
                </a>

                <a href="a" className="btn-red">
                  Others Item
                </a>
              </div>
            </div>
          </div>
          <div className=" dot-box">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recommend;
