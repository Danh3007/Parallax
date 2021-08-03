import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

class HeaderAuth extends Component {
    render() {
        return (
            <div>
                <h1>Header Auth</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default HeaderAuth;