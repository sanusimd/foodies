import React, { Component } from "react";
import TopBox from "../TopBox";
import Footer from "../Footer";
import Recommend from "../Recommend";
import Review from "../Review";
import HeadingStyle from "../HeadingStyle";
import ReserveTable from "../ReserveTable";
import rar from '../../img/pizza.jpg'

class ReservationPage extends Component {
  render() {
    return (
      <div>
        <TopBox title="Reservation" />
        <HeadingStyle maintitle="Reservation" subtitle="Reserve your Table" />
        <ReserveTable />
        <Recommend  />
        <Review styles={{ backgroundImage:`url(${rar})` }}></Review> />
        <Footer />
      </div>
    );
  }
}

export default ReservationPage;
