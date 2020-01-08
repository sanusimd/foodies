import React, { Component } from "react";

class HeadingStyle extends Component {
  render() {
    return (
      <div className="info">
        <h3>{this.props.maintitle}</h3>
        <h2>{this.props.subtitle}</h2>
        <img
          src={require("../img/d-line.png")}
          className="stylish-line"
          alt={"stylish-line"}
        />
      </div>
    );
  }
}

export default HeadingStyle;
