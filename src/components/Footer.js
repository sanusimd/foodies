import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Footer extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    // const style = {
    //   width: "100%",
    //   height: "100%"
    // };
    return (
      <section className="footer">
        <div className="footer__mapbox">
          <div className="footer__mapbox--map"></div>
          <div className="footer__mapbox--info">
          <img
              src="/img/logo.png"
              className="footer-logo"
              alt={"footer-logo"}
              
            />
            <h3>Location</h3>
            <img
              src="/img/d-line.png"
              className="stylish-line"
              alt={"stylish-line"}
            />
            <p>45-47 Babangida Avenue Lekki Lagos Nigeria</p>
          </div>
        </div>
        <div className="container">
          <div className="footer__box">
            <div className="box footer__box--about">
              <h3>About Us</h3>
              <img
                src="/img/d-line.png"
                className="stylish-line"
                alt={"stylish-line"}
              />
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Conso Nantia there live the blind texts
              </p>
            </div>
            <div className="box footer__box--hours">
              <h3>Opening Hours</h3>
              <img
                src="/img/d-line.png"
                className="stylish-line"
                alt={"stylish-line"}
              />
              <p>
                {" "}
                <span>Mon-Thu:</span> 7:00am-8:00pm{" "}
              </p>
              <p>
                {" "}
                <span>Fri-Sun:</span> 7:00am-10:00pm
              </p>
            </div>
            <div className="box footer__box--contact">
              <h3>Contact Info</h3>
              <img
                src="/img/d-line.png"
                className="stylish-line"
                alt={"stylish-line"}
              />
              <p>
                {" "}
                <span>Call us:</span> 091 552 6580
              </p>
              <p>
                {" "}
                <span>Mail us:</span> contact@foodie.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="footer__copyright--info">
            <span>
              &copy; Copyright Foodie Nigeria, Design By :-{" "}
              <a href="a">Sanusi</a>{" "}
            </span>
          </div>
          {/* <div className="nav">
            <a href="#">About Us</a>
            <a href="#">Our Chef</a>
            <a href="#">News</a>
            <a href="#">Delivery</a>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Footer;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAy1t5OdFdoiM-MhH52x71Dw6fExbobJGE"
// })(Footer);
