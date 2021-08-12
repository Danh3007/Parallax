import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line
import ava from "./../../../images/ava.jpg" // eslint-disable-line

import Me from "./Me/Me"
import Bank from "./Me/Bank"
import ChangePass from "./Me/ChangePass"
import Address from "./Me/Address"

class MyHome extends Component {
    render() {
        return (
            <main className="container">
                <div className="row">
                    <aside className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="navigation">
                    <ul className="navbar-nav">
                       <br/>
                            <h3 className="h3bank_change_add_me_home">CHIENTHUHAI</h3>
                            <p>(Nguyễn Minh Chiến)</p>
                            <br/>
                        
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/me"><p><span className="Myhome__icon fas fa-user"></span> Hồ sơ</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/me/bank"><p><span className="Myhome__icon fas fa-university"></span> Ngân hàng</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/me/address"><p><span className="Myhome__icon fas fa-map-marker-alt"></span> &nbsp;Địa chỉ</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/me/changePass"><p><span className="Myhome__icon fas fa-key"></span> Thay đổi mật khẩu</p></Link>
                        </li>
                        
                    </ul>
                    </div>
                    </aside>
                    <article className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <Switch>
                            <Route path="/me/changePass" component={ChangePass} />
                            <Route path="/me/address" component={Address} />
                            <Route path="/me/bank" component={Bank} />
                            <Route path="/me" component={Me} />
                        </Switch>
                    </article>
                </div>
            </main>
        );
    }
}

export default MyHome;