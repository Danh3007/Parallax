import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

class footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <h3>⁡⁠⁢⁡⁠⁢⁣</h3>
                            <div className="logo"></div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h3>⁡⁠⁢giới thiệu</h3>
                            <p>Chuyên Bán Acc Game Và Phần Thử Vận May,Vòng Quay May Mắn Siêu Hot Siêu Hấp Dẫn Và
                            Tràn Đầy Nhiều Phần Thưởng Có Gía Trị
                            Shop Giao Dịch Tự Động 24/24 Với Đội CHKH Nhiệt Tình Thân Thiện</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h3>liên kết nhanh</h3>
                            <ul className="list-inline f-social">
                            <p><Link className="nav-link" to="/"><span className="footer__icon fas fa-angle-double-right"></span>Trang chủ</Link></p>
                            <p><Link className="nav-link" to="/about"><span className="footer__icon fas fa-angle-double-right"></span>Giới thiệu</Link></p>
                            <p><Link className="nav-link" to="/auth"><span className="footer__icon fas fa-angle-double-right"></span>Đăng nhập</Link></p>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h3>THÔNG TIN LIÊN LẠC</h3>
                            <ul className="list-inline f-social">
                            <p><Link className="nav-link" to=""><span className="footer__icon fa fa-phone-volume"></span>+84 362882225</Link></p>
                            <p><Link className="nav-link" to=""><span className="footer__icon fa fa-envelope"></span>cskh@HDC.vn</Link></p>
                            <p><Link className="nav-link" to=""><span className="footer__icon fab fa-facebook-f"></span>facebook.com/HDC</Link></p>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                            <p className="company-name">© 2021 Bản quyền của <span className="fas fa-angle"> HDC </span> Design By :
                            <span className="fas fa-angle"> HDC </span></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;