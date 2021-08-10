import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import Me from "./Me/Me"
import Bank from "./Me/Bank"
import ChangePass from "./Me/ChangePass"
import Address from "./Me/Address"

class MyHome extends Component {
    render() {
        return (
            <main className="container">
                <div className="row">
                    <aside className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <ul class="list-group">
                        <caption>Tài khoản của tôi</caption>
                        <li class="list-group-item">
                            <Link className="nav-link" to="/me"><p>Trang chủ</p></Link>
                        </li>
                        <li class="list-group-item">
                            <Link className="nav-link" to="/me/bank"><p>Ngân hàng</p></Link>
                        </li>
                        <li class="list-group-item">
                            <Link className="nav-link" to="/me/address"><p>Dịa chỉ</p></Link>
                        </li>
                        <li class="list-group-item">
                            <Link className="nav-link" to="/me/changePass"><p>Thay đổi mật khẩu</p></Link>
                        </li>
                        
                    </ul>
                    </aside>
                    <article className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
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