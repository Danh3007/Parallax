import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import Logo from "./../../../images/logo.png" // eslint-disable-line
class HeaderAuth extends Component {
    render() {
        return (
            <header className="headerAuth">
                <div className="container">
                        <Link to="/">
                            <img src={Logo} alt="logo-shop" className="logoAuth"></img>
                        </Link>
                        <span className="txtAuth">Đăng Nhập / Đăng Kí</span>
                </div>
            </header>
        );
    }
}

export default HeaderAuth;