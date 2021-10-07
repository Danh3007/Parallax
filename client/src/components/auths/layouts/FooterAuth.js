import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

class footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="Footer__footer">
                        <div className="logoFooter">
                            <h3 className="hrLogo">⁡⁠⁢</h3>
                            <div className="logo"></div>
                        </div>
                        <div className="default">
                            <div className="aboutFooter">
                                <h3>PARALLAX - NỀN TẢNG MUA SẮM TRỰC TUYẾN HÀNG ĐẦU VIỆT NAM</h3>
                                <p>
                                    Thành lập từ năm 2012, Lazada là nền tảng thương mại điện tử hàng đầu Đông Nam Á, tiên phong thúc đẩy sự phát triển tại khu vực thông qua Thương mại &amp; Công nghệ. Hiện nay, với nền tảng logistics và hệ thống thanh toán lớn nhất khu vực, Lazada trở thành một phần trong đời sống của người tiêu dùng và hướng đến mục tiêu phục vụ cho 300 triệu khách hàng trên toàn khu vực Đông Nam Á vào năm 2030.</p>
                            </div>
                            <div className="sociFooter">
                                <h3>liên kết nhanh</h3>
                                <ul className="list-inline f-social">
                                    <p><Link className="nav-link" to="/"><span className="footer__icon fas fa-angle-double-right"></span>Trang chủ</Link></p>
                                    <p><Link className="nav-link" to="/about"><span className="footer__icon fas fa-angle-double-right"></span>Danh sách sản phẩm</Link></p>
                                </ul>
                            </div>
                            <div className="infoFooter">
                                <h3>THÔNG TIN LIÊN LẠC</h3>
                                <ul className="list-inline f-social">
                                    <p><Link className="nav-link" to=""><span className="footer__icon fa fa-phone-volume"></span>+84 362882225</Link></p>
                                    <p><Link className="nav-link" to=""><span className="footer__icon fa fa-envelope"></span>cskh@HDC.vn</Link></p>
                                    <p><Link className="nav-link" to=""><span className="footer__icon fab fa-facebook-f"></span>facebook.com/HDC</Link></p>
                                </ul>
                            </div>
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
            </footer>
        );
    }
}

export default footer;