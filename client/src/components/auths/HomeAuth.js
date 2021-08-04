import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import HeaderAuth from './layouts/HeaderAuth';
import FooterAuth from './layouts/FooterAuth';

class Home extends Component {
    constructor(props) {
        super(props)
        this.onChaneAuth=this.onChaneAuth.bind(this)
    }
    onChaneAuth = (e) => {
        document.querySelector('.Auth').classList.toggle('s--signup');
    }
    render() {
        return (
            <div>
                <HeaderAuth />
                <div className="Auth">
                    <div className="formAuth sign-in">
                        <h2>Chào Mừng Quay Lại,</h2>
                        <form>
                            <div className="form-group">
                                <label>Nhập Email</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Nhập Mật Khẩu</label>
                                <input type="password" className="form-control" />
                            </div>
                            <p className="forgot-pass">Quên Mật Khẩu?</p>
                            <button type="submit" className="btn btn-login">Đăng Nhập</button>
                            <button type="button" className="btn btn-fb">Kết nối với Facebook</button>
                        </form>
                    </div>
                    <div className="sub-Auth">
                        <div className="effect">
                            <div className="effect__text m--up">
                                <h2>Tạo tài khoản ?</h2>
                                <p>Đăng kí để tham gia và trải nghiệm nhiều tính năng mới</p>
                            </div>
                            <div className="effect__text m--in">
                                <h2>Đã có tài khoản</h2>
                                <p>Nếu bạn đã có tài khoản, chỉ cần đăng nhậP. Chúng tôi rất nhớ bạn !</p>
                            </div>
                            <div onClick={this.onChaneAuth} className="effect__btn">
                                <span className="m--up">Đăng Kí</span>
                                <span className="m--in">Đăng Nhập</span>
                            </div>
                        </div>
                        <div className="formAuth sign-up">
                            <h2>Trở Thành Một Thành Viên Của Chúng Tôi,</h2>
                            <form>
                                <div className="form-group">
                                    <label>Nhập Tên</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Nhập Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Nhập Mật Khẩu</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-register">Đăng Kí</button>
                            </form>
                        </div>
                    </div>
                </div>
                <FooterAuth />
            </div>
        );
    }
}

export default Home;