import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import list1 from "./../../../images/list1.png";
import list2 from "./../../../images/list2.png";
import list3 from "./../../../images/list3.png";
import list4 from "./../../../images/list4.png";
import list5 from "./../../../images/list5.png";

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div>
                            <div className="tab-content">
                                <div className="tab-pane active" id="pic-1">
                                    <Link to="/">
                                        <img src={list1} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth" ></img>
                                    </Link>
                                </div>
                                <div className="tab-pane" id="pic-2">
                                    <Link to="/">
                                        <img src={list2} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                    </Link>
                                </div>
                                <div className="tab-pane" id="pic-3">
                                    <Link to="/">
                                        <img src={list3} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                    </Link>
                                </div>
                                <div className="tab-pane" id="pic-4">
                                    <Link to="/">
                                        <img src={list4} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                    </Link>
                                </div>
                                <div className="tab-pane" id="pic-5">
                                    <Link to="/">
                                        <img src={list5} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                    </Link>
                                </div>
                            </div>
                            {/*tao tab anh*/}
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a href="#pic-1" data-toggle="tab">
                                        <img id="dichuyen" src={list1} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-2" data-toggle="tab">
                                        <img id="dichuyen" src={list2} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-3" data-toggle="tab">
                                        <img id="dichuyen" src={list3} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-4" data-toggle="tab">
                                        <img id="dichuyen" src={list4} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-5" data-toggle="tab">
                                        <img id="dichuyen" src={list5} style={{ width: '60px' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <h2>TÊN SẢN PHẨM</h2>
                        <div className="form-inline">
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                        </div>
                        <hr />
                        <div className="backgroundform">
                            <h4 className="edith4">4444 vnđ</h4>
                            <div className="form-inline">
                                <h4 className="edith4">Số lượng:&nbsp;<input min={0} max={100} defaultValue={1} type="number" /></h4>
                            </div>
                            <div className="form-inline">
                                <h4 className="edith4">Size:&nbsp;
                                    <select defaultValue={'DEFAULT'} className="default-select">
                                        <option value="DEFAULT" disabled>Chọn size</option>
                                        <option value="s">S</option>
                                        <option value="m">L</option>
                                        <option value="l">X</option>
                                    </select>
                                </h4>
                            </div>
                            <div className="form-inline">
                                <h4 className="edith4">Chọn màu:&nbsp;
                                    <button type="button" className="btn btn-default-xanh btn-circle" /> xanh
                                    <button type="button" className="btn btn-default-xam btn-circle" /> xám
                                    <button type="button" className="btn btn-default-do btn-circle" /> đỏ
                                    <button type="button" className="btn btn-default-vang btn-circle" /> vàng
                                    <button type="button" className="btn btn-default-luc btn-circle" /> lục

                                </h4>
                            </div>
                        </div>
                        <br />
                        <div className="form-inline click1">
                            <button className="btn btn-primary" type="submit"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                            <button className="btn btn-primary" type="submit"><i className="fa fa-shopping-cart" /> Mua ngay</button>
                        </div>
                       

                    </div>
                </div>
                <hr />
                <h2>Mô tả sản phẩm</h2>
                <p>
                    May Minh Cường - "Chúng tôi cam kết đảm bảo chất lượng và Tiến độ từng đơn đặt hàng"
                    Sản phẩm Áo sơ mi nam là 1 trong những mẫu áo bất hủ. May Minh Cường luôn sẵn mẫu này. Form áo bên mình hơi nhỏ so với bình thường, Quý khách hàng lưu ý đọc bảng size hoặc nhắn tin để shop tư vấn chính xác nhé!<br />
                </p>
                <div>
                    <div id="demo" className="collapse">
                        <p> Sơ mi lụa - Hướng dẫn chọn size:<br />
                            Size M: Cân nặng từ 48-51kg, Chiều cao dưới 163cm<br />
                            Size L: Cân nặng từ 51-60kg, Chiều cao 163 - 168cm<br />
                            Size XL: Cân nặng từ 60-65kg, Chiều cao 165 - 170cm<br />
                            Size XXL: Cân nặng từ 64-72kg, Chiều cao 170 - 175cm<br />
                            Size 3XL: Cân nặng từ 72-80kg, Chiều cao 170 - 183cm<br />
                            Lưu ý: Thông số sản phẩm có thể chênh lệch 1-2cm</p>
                    </div>
                    <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo">Xem thêm</button>

                </div>
                <hr/>
                <div>
                <h2>Đánh giá sản phẩm</h2>
                <input type="text" placeholder="Đánh giá tại đây" maxLength={500}/>
                <button className="btn btn-primary" type="submit"> Gởi</button>
                </div>
            </div>
        );
    }
}

export default About;