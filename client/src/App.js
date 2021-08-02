import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import Login from "./components/auths/Login"
import Register from "./components/auths/Register"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Footer />
      </Router>
    );
  }
}

export default App;