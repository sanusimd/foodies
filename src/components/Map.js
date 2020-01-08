import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div className="map-container"> 
        <div className="mapbox">
          <div className="mapbox--map"></div>
          <div className="mapbox--info">
            <img
              src={require("../img/logo.png")}
              className="footer-logo"
              alt={"footer-logo"}
            />
            <h3>Location</h3>
            <img
              src={require("../img/d-line.png")}
              className="stylish-line"
              alt={"stylish-line"}
            />
            <p>45-47 Babangida Avenue Lekki Lagos Nigeria</p>
          </div>
        </div>
        </div>
    );
  }
}

export default Map;
