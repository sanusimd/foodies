import React, { Component } from "react";
// import car from '../img/top-section-slider-01.jpg'

class Review extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    
    return (
      <section className="review" >
        <div className="review-star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="details-box">
          <p className="text">
            Cattle. And was. Fourth be appear. Thing lesser replenish evening
            called void a, sea, blessed meat fourth called moveth place behold
            night own night third in they're abundantly
          </p>
          <div>
            <img
              src={require("../img/d-line.png")}
              className="stylish-line"
              alt={"stylish-line"}
            />
          </div>

          <div>
            <img
              src={require("../img/review-photo.jpg")}
              className="review-girl"
              alt={"review"}
            />
            <h3>Joe Ma</h3>
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

export default Review;
