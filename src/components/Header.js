import React, { Component } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { Switch, Route, NavLink } from "react-router-dom";

class Header extends Component {
  

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="header__menu">
              <div className="logo">FOODIE</div>
              <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </nav>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default Header;

