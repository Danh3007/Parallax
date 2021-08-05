import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import TrangChu from "./pages/TrangChu";
import About from "./pages/About";
import Banner from "./pages/Banner";


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={TrangChu} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
