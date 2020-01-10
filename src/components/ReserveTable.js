import React, { Component } from "react";

class ReserveTable extends Component {
  render() {
    return (
      <div className="reserveTable">
        <div className="container">
          <div className="reserve-info">
            <div className="form-box "><h1>form</h1></div>
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
