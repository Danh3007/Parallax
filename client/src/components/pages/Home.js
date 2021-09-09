import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import TrangChu from "./pages/TrangChu";
import Detail from "./pages/Detail";
import MyHome from "./pages/MyHome";
import Cart from "./pages/Shopcart"
import GroupProduct from "./pages/adminGroupProduct"

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/groupProduct" component={GroupProduct} />
            <Route path="/me" component={MyHome} />
            <Route path="/cart" component={Cart} />
            <Route path="/detail" component={Detail} />
            <Route path="/" component={TrangChu} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
