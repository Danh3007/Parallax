import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/auth/login">đăng nhập</Link>
            </li>
            <li className="nav-item">
              <Link to="/auth/register">đăng kí</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default header;
