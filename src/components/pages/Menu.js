import React, { Component } from "react";
import TopBox from "../TopBox";
import HeadingStyle from "../HeadingStyle";
import Footer from "../Footer";
import MenuItems from "../MenuItems";
import Recommend from "../Recommend";

class Menu extends Component {
  render() {
    return (
      <div>
        <TopBox title="Menu" />
        <HeadingStyle maintitle="Breakfast" subtitle="Food for Morning" />
        <MenuItems />
        <div className="menuLunch">
        <HeadingStyle 
        maintitle="Lunch" 
        subtitle="Delicious Lunch items" colors="white"
        />
        <MenuItems  pColor="white" />
        </div>
        <HeadingStyle maintitle="Dinner" subtitle="The Mael of the Day" />
        <MenuItems />
        <Recommend />
        <Footer />
      </div>
    );
  }
}

export default Menu;
