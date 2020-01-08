import React, { Component } from "react";
import Home from "./pages/Home";
import { Switch, Route, NavLink } from "react-router-dom";

class TopBox extends Component {
  render() {
    return (
      <section className="topBox">
        <div className="container">
          <h1 className="topBox__heading">{this.props.title}</h1>
          <div className="nav-menu">
            <NavLink to="/">Home</NavLink>
          </div>
        </div>
        <Switch>
            <Route exact path="/" component= {Home} />
        </Switch>
      </section>
    );
  }
}

export default TopBox;
