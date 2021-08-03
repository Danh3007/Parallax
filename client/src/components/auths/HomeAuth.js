import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import HeaderAuth from './layouts/HeaderAuth';
import FooterAuth from './layouts/FooterAuth';
import AuthLogin from "./forms/Login"
import AuthRegister from "./forms/Register"


class Home extends Component {
    render() {
        return (
            <div>
                <HeaderAuth />
                <Switch>
                    <Route path="/auth/login" component={AuthLogin} />
                    <Route path="/auth/register" component={AuthRegister} />
                </Switch>
                <FooterAuth />
            </div>
        );
    }
}

export default Home;